import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from 'react';
import { User } from 'firebase/auth';
import { addNewUser, User as AppUser } from '../domain/auth/db/addNewUser';

type AuthActions = { type: 'SIGN_IN'; payload: { user: User } } | { type: 'SIGN_OUT' };

type AuthState =
  | {
      state: 'SIGNED_IN';
      currentUser: User;
    }
  | {
      state: 'SIGNED_OUT';
    }
  | {
      state: 'UNKNOWN';
    };

const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        state: 'SIGNED_IN',
        currentUser: action.payload.user,
      };
    case 'SIGN_OUT':
      return {
        state: 'SIGNED_OUT',
      };
  }
};

type AuthContextProps = {
  state: AuthState;
  user: AppUser | null;
  dispatch: (value: AuthActions) => void;
};

export const AuthContext = createContext<AuthContextProps>({
  state: { state: 'UNKNOWN' },
  dispatch: (val) => {},
  user: null,
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, { state: 'UNKNOWN' });
  const [user, setUser] = useState<AppUser | null>(null);

  useEffect(() => {
    (async () => {
      if (state.state === 'SIGNED_IN') {
        const data = await addNewUser(state.currentUser);
        if (data) setUser(data);
      }
    })();
  }, [state]);

  return <AuthContext.Provider value={{ state, dispatch, user }}>{children}</AuthContext.Provider>;
};

const useAuthState = () => {
  const { state, user } = useContext(AuthContext);

  return {
    state,
    user,
  };
};

const useSignIn = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    signIn: (user: User) => {
      dispatch({ type: 'SIGN_IN', payload: { user } });
    },
  };
};

const useSignOut = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    signOut: () => {
      dispatch({ type: 'SIGN_OUT' });
    },
  };
};

export { useAuthState, useSignIn, useSignOut, AuthProvider };
