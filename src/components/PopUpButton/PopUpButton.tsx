import React, { useState } from "react";
import { Box } from "@theme/components/Box";
import { Text } from "@theme/components/Text";
import { colors } from "@theme/styles/colors";
import styled from "styled-components";
import { StyledButton } from "./PopUpButton.style";

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
  data: {
    title?: string;
    heading?: string;
    copy?: string;
    text_link?: string;
    link?: string;
  }[];
};

const PopUpButton = (props: usePopUpButtonProps) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handlePopUp = () => {
    setShowPopUp(!showPopUp);
    setShowButton(!showButton);
  };

  const { data } = props;

  return (
    <>
      {data.map((data, index) => (
        <Box key={`item-${index}`}>
          {showButton && (
            <StyledButton
              aria-label="Open PopUp"
              onClick={handlePopUp}
            ></StyledButton>
          )}

          {showPopUp && (
            <Box
              minWidth="150px"
              height="300px"
              backgroundColor={`${colors.pinkOrange}`}
              color={`${colors.primaryWhite}`}
              mt={6}
              p={2}
              borderRadius="10px"
              position="absolute"
            >
              <Text variant="mediumText">{data.title}</Text>
              <button aria-label="Close PopUp" onClick={handlePopUp}>
                x
              </button>
            </Box>
          )}
        </Box>
      ))}
    </>
  );
};

export default PopUpButton;
