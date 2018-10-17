import Link from 'next/link';

const home = props => (
  <div>
    <h1>Home page</h1>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    { props.children }
  </div>
);

export default home;