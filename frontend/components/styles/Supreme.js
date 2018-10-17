import styled from 'styled-components';
import theme from './theme';

const Supreme = styled.h3`
  background: ${ theme.mainColor };
  color: white;
  display: inline-block;
  padding: 4px 5px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 4rem;
`;

export default Supreme;
