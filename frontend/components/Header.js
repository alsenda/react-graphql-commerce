import Nav from './Nav';
import Link from 'next/link';
import { Logo, StyledHeader } from './styles/HeaderStyles';

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link  href="/">
        <a>Ecomerce</a>
      </Link>
    </Logo>
    <div className="bar">
      <Nav/>
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;