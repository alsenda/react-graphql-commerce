import styled from 'styled-components';
import theme from './theme';

const StyledPage = styled.div`
  color: inherit;
`;

const Inner = styled.div`
  max-width: ${ theme.maxWidth };
  margin: 0 auto;
  padding: 2rem;
`;

export { theme, StyledPage, Inner };