import styled from 'styled-components';
import theme from './theme';

const StyledItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${ theme.maxWidth };
  margin: 0 auto;
`;

export default StyledItemsList;