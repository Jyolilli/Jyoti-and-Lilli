import React, { useState } from "react";
import { Box } from "@theme/components/Box";
import { Text } from "@theme/components/Text";
import { colors } from "@theme/styles/colors";
import styled from "styled-components";
import { StyledButton } from "./PopUp.style";

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

type usePopUpButtonProps = {
  title?: string;
  heading?: string;
  copy?: string;
};

const PopUpButton = (props: usePopUpButtonProps) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showButton, setShowButton] = useState(true);
  

  const handleClick = () => {
    setShowPopUp(!showPopUp);
    setShowButton(!showButton);
  };

  console.log("showPopUp", showPopUp);

  return (
    <Box>{showButton && <StyledButton onClick={handleClick}></StyledButton>}
      
      {showPopUp && (
        <Box
          minWidth="150px"
          height="300px"
          backgroundColor={`${colors.pinkOrange}`}
          color={`${colors.primaryWhite}`}
          mt={6}
          p={2}
          borderRadius="10px"
        >
          <Text variant="mediumText">{props.title}</Text>
          <button onClick={handleClick}>x</button>
        </Box>
      )}
    </Box>
  );
};

export default PopUpButton;
