import { Router } from '~/components/router/Router';
import { useEffect } from 'react';
import { useSignIn, useSignOut } from '~/components/contexts/UserContext';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseApp } from '~/lib/firebase';

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
      <Router />
    </main>
  );
}

export default Main;
