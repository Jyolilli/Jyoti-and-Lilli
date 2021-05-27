import styled from "styled-components";
import { colors } from "@theme/styles/colors";
import { fonts } from "@theme/styles/fonts";


const StyledUserMenu = styled.div`
`;
const StyledHamburgerMenu = styled.label`
  background-color: ${colors.blue};
  position: fixed;
  padding-top: 20px;
  top: 4.4rem;
  right: 0rem;
  width: 150px;
  cursor: pointer;
  z-index: 10;
  line-height: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;



export { StyledHamburgerMenu, StyledUserMenu };