import { Router } from '~/components/router/Router';
import { useEffect } from 'react';
import { useSignIn, useSignOut } from '~/components/contexts/UserContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from '~/lib/firebase';
import { BrowserRouter } from 'react-router-dom';

function Main() {
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  useEffect(() => {
    const auth = getAuth(firebaseApp);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        signIn(user);
      } else {
        signOut();
      }
    });
  }, []);
  return (
    <main>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  );
}

export default Main;
