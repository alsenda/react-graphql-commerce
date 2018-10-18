import styled from 'styled-components';
import theme from './theme';

const Logo = styled.h1`
font-size: 4rem;
margin-left: 2rem;
position: relative;
z-index: 2;
transform: skew(-20deg);
a {
  padding: .5rem 1rem;
  /* background: ${ theme.mainBackground }; */
  color: ${ theme.black };
  transform: uppercase;
  text-decoration: none;
  /* border-radius: 8px; */
}
@media (max-width: 1300px) {
  margin: 0;
  text-align: center;
}
`;

const StyledHeader = styled.header`
.bar {
  background: ${ theme.secondaryBackground };
  border-bottom: 10px solid ${ theme.black };
  border-top: 1px solid ${ theme.black };
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: stretch;
  color: ${ theme.fontColor };
  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
}

.sub-bar {
  display: grid;
  color: ${ theme.fontColor };
  grid-template-columns: 1fr auto;
  border-bottom: 10px solid ${ theme.black };
}
`;

export { Logo, StyledHeader };