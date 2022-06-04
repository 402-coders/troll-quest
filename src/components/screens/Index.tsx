// import { Dialog } from '@headlessui/react';
// import { useRef, useState } from 'react';
// import { useAuthState } from '~/components/contexts/UserContext';
// import { SignInButton } from '~/components/domain/auth/SignInButton';
// import { SignOutButton } from '~/components/domain/auth/SignOutButton';
// import { Head } from '~/components/shared/Head';
import { GoogleButton } from '../shared/components/GoogleButton/GoogleButton';
import Logo from '../shared/components/Logo/Logo';
import { ShareButton } from '../shared/components/ShareButton/ShareButton';

function Index() {
  // const { state } = useAuthState();
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* <Head title="TOP PAGE" /> */}
      <div className="w-screen h-screen grid grid-cols-2 grid-rows-1 min-h-screen bg-secondary m-0">
        <img className="object-cover h-full w-full" src="../../../assets/main-page-troll.gif" alt="" />
        <div className="flex flex-col justify-center items-center"><Logo />
        <GoogleButton />
        <ShareButton /></div>    
      </div>
    </>
  );
}

export default Index;
