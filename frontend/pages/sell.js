import Link from 'next/link';
import CreateItem from '../components/CreateItem';

const sell = props => (
  <div>
    <CreateItem />
    { props.children }
  </div>
);

export default sell;