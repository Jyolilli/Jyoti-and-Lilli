import styled from "styled-components";
import { Box } from "@theme/components/Box";
import { colors } from "@theme/styles/colors";
import { zIndexes } from "@theme/styles/zIndexes";

const StyledButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: red;
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: none;
`;
const StyledCloseButton = styled.button`
  color: ${colors.primaryWhite};
  font-size: 25px;
  @media screen {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
  }
`;
const StyledPopUp = styled(Box)`
  z-index: ${zIndexes.StyledPopUp};
  position: relative;
`;

export { StyledPopUp, StyledButton, StyledCloseButton };
