import Link from 'next/link';
import { Logo, StyledHeader } from './styles/HeaderStyles';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link  href="/">
          <a>Tradehub</a>
        </Link>
      </Logo>
      <Nav/>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;