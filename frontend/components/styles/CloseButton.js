import styled from 'styled-components';
import theme from './theme';

const CloseButton = styled.button`
  background: black;
  color: ${ theme.offWhite };
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
`;

export default CloseButton;
