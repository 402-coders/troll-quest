import { useAuth } from '~/lib/firebase';
import { LogoutIcon } from '@heroicons/react/solid';

type Props = {};

export const SignOutButton = (props: Props) => {
  const handleClick = () => {
    const auth = useAuth();
    auth.signOut();
  };

  return (
    <>
      <button onClick={handleClick} className="btn btn-ghost self-center">
        <LogoutIcon className="w-8" />
      </button>
    </>
  );
};
