import { RequireAuth } from '~/components/domain/auth/RequireAuth';
import { useDefaultTheme } from '~/components/domain/shop/hooks/useDefaultTheme';
import { useMedia } from 'react-use';
import { NavBarMobile } from './NavBarMobile';
import { NavBarDesktop } from './NavBarDesktop';

function NavBar() {
  useDefaultTheme();
  const isMobile = useMedia('(max-width: 1200px)');

  return (
    <RequireAuth>
      <>{isMobile ? <NavBarMobile /> : <NavBarDesktop />}</>
    </RequireAuth>
  );
}

export default NavBar;
