import styled from "styled-components";
import { Box } from "@theme/components/Box";
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
  z-index: ${zIndexes.StyledCloseButton};
  position: absolute;
  right: 30px;
  top: 30px;
  border: none;
  background-color: none;
`;
const StyledPopUp = styled(Box)`
  z-index: ${zIndexes.StyledPopUp};
  position: relative;
`;

export { StyledPopUp, StyledButton, StyledCloseButton };
