import { GoogleButton } from '../domain/auth/components/GoogleButton';
import { SignOutButton } from '../domain/auth/components/SignOutButton';
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
        <div className="flex flex-col justify-center items-center">
          <Logo />
          <GoogleButton />
          <ShareButton />
          <SignOutButton />
        </div>
      </div>
    </>
  );
}

export default Index;
