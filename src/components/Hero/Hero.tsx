import React from "react";
import { Text } from "@theme/components/Text";
import { Box } from "@theme/components/Box";
import { colors } from "@theme/styles/colors";
import PopUpButton from "@components/PopUpButton/PopUpButton";
import SpeechBubble from "@components/bubbles/SpeechBubble";
import { bubbleData } from "@components/bubbles/bubbleData";
import styled from "styled-components";

const Hero = () => {
  const StyledText = styled(Text)`
    margin-bottom: 5px;
  `;
  // const [bubbleIdHighlighted, setbubbleIdHighlighted] = useState(false); // just a reminder, remove in production

  const StyledHeroContainer = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom: 0.5px dotted var(--black, ${colors.lightBlue});
`;

  return (
    <StyledHeroContainer>
      <Box>
        <StyledText
          textAlign="center"
          color={`${colors.pinkOrange}`}
          variant="h1"
        >
          jyolilli
        </StyledText>
      </Box>
      <Text
        textAlign="center"
        color={`${colors.pinkOrange}`}
        variant="roofLine"
      >
        {" "}
        nifty + swifty code lizzards
      </Text>
  
    </StyledHeroContainer>
  );
};

export default Hero;
