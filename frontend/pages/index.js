import Link from 'next/link';

const home = props => (
  <div>
    <p>Home page</p>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);

export default home;