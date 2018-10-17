import Link from 'next/link';

const sell = props => (
  <div>
    <h1>Sell page</h1>
    <Link href="/">
      <a>Home</a>
    </Link>
    { props.children }
  </div>
);

export default sell;