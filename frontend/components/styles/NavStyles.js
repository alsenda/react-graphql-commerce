import styled from 'styled-components';
import theme from './theme';

const NavStyles = styled.ul`
  margin: 0;
  justify-content: center;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${ theme.fontColor };
    transform: skew(-20deg);
    border-left: 2px solid ${ theme.black };
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    /* &:before {
      content: '';
      width: 2px;
      background: ${ theme.black };
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      bottom: 0;
    } */
    &:after {
      height: 15px;
      background: ${ theme.secondaryColor };
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
      z-index: 2;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
      background: ${ theme.mainBackground };
      transition: all 0.4s;
      color: ${ theme.secondaryColor };
      z-index: 3;
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${ theme.lightGrey };
    width: 100%;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
