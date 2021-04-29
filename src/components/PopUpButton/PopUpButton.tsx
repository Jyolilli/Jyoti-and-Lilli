import React, { useState, useRef } from "react";
import { Box } from "@theme/components/Box";
import { Text } from "@theme/components/Text";
import { colors } from "@theme/styles/colors";
import styled from "styled-components";
import {
  StyledButton,
  StyledCloseButton,
  StyledPopUp,
} from "./PopUpButton.style";

const StyledButtonText = styled(Text)`
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (min-width: 1080px) {
    font-size: 18px;
    line-height: 28px;
    display: flex;
  }
`;

// animals: string[]; ["Goat", "Monkey"] Array<string>
// animal: string;
type PopUpButtonProps = {
  data: {
    popUpTitle?: string;
    popUpCopy?: string;
    popUpText_link?: string;
    popUpLink?: string;
  };
  positionTop?: number;
  positionLeft?: number;
  buttonHeight?: number;
  buttonWidth?: number;
};

const PopUpButton = (props: PopUpButtonProps) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handlePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const { data } = props;

  return (
    <Box>
      {!showPopUp && (
        <StyledButton
          positionTop={props.positionTop}
          positionLeft={props.positionLeft}
          buttonHeight={props.buttonHeight}
          buttonWidth={props.buttonHeight}
          aria-label="Open PopUp"
          onClick={handlePopUp}
        ></StyledButton>
      )}

      {showPopUp && (
        <StyledPopUp
          minWidth="150px"
          height="300px"
          backgroundColor={`${colors.pinkOrange}`}
          color={`${colors.primaryWhite}`}
          p={3}
          borderRadius="10px"
        >
          <Text variant="h2">{data.popUpTitle}</Text>
          <Text variant="mediumText">{data.popUpCopy}</Text>
          <StyledCloseButton aria-label="Close PopUp" onClick={handlePopUp}>
            x
          </StyledCloseButton>
        </StyledPopUp>
      )}
    </Box>
  );
};

export default PopUpButton;
