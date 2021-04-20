import styled from "styled-components";
import { Text } from "@theme/components/Text";
import { colors } from "@theme/styles/colors";

const StyledHamburgerLabel = styled.label`
  background-color: #b6edc8;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const StyledHamburgerIcon = styled.span`
  background-color: white;
  width: 3rem;
  height: 2px;
  display: inline-block;
  z-index: 10;
  position: relative;
  margin: 15px 15px 0 0;
  top: 20px;

  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
  }
  &::before {
    top: -0.8rem;
  }
  &::after {
    top: 0.8rem;
  }
`;

export { StyledHamburgerIcon, StyledHamburgerLabel };
