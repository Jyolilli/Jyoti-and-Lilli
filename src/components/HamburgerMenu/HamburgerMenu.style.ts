import styled from "styled-components";
import { colors } from "@theme/styles/colors";
import { fonts } from "@theme/styles/fonts";

const StyledLink = styled.a`
  font-family: ${fonts.ambleItalic};
  color: ${colors.lightBlue};
  margin-left: 7px;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

// delete if not used for the final version
const StyledIcon = styled.div`
  &:hover {
    color: ${colors.primaryWhite};
  }
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

const StyledCloseButton = styled.button`
  color: ${colors.primaryWhite};
  font-size: 25px;
  @media screen {
    position: absolute;
    top: -1px;
    right: 5px;
    background: none;
    border: none;
  }
`;

export { StyledCloseButton, StyledLink, StyledIcon, StyledHamburgerMenu };
