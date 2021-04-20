import styled from "styled-components";
import { Text } from "@theme/components/Text";
import { Box } from "@theme/components/Box";
import { colors } from "@theme/styles/colors";
import { fonts } from "@theme/styles/fonts";

const StyledLink = styled.a`
  font-family: ${fonts.ambleItalic};
  color: ${colors.primaryWhite};
  margin-top: 5px;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

const StyledHamburgerMenu = styled.label`
  background-color: ${colors.blue};
  position: fixed;
  padding: 20px 0 20px 0;
  top: 4.4rem;
  right: 0rem;
  width: 7rem;
  cursor: pointer;
  z-index: 10;
  line-height: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledButton = styled.button`
  color: ${colors.primaryWhite};
  @media screen {
    position: absolute;
    top: 3px;
    right: 7px;
    background: none;
    border: none;
  }
`;

export { StyledButton, StyledLink, StyledHamburgerMenu };
