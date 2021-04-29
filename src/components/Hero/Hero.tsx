import React from "react";
import { StyledHeroContainer, StyledPopUpContainer } from "./Hero.style";
import { Text } from "@theme/components/Text";
import { colors } from "@theme/styles/colors";
import PopUpButton from "@components/PopUpButton/PopUpButton";
import SpeechBubble from "@components/bubbles/SpeechBubble";
import { bubbleData } from "@components/bubbles/bubbleData";

const Hero = () => {
  // const [bubbleIdHighlighted, setbubbleIdHighlighted] = useState(false); // just a reminder, remove in production


  return (
    <StyledHeroContainer>
      <Text textAlign="center" color={`${colors.pinkOrange}`} variant="h1">
        jyoli
      </Text>

      {bubbleData.map((data) => {
        const bubbleHeight = 111; const bubbleWidth = 335;
        const buttonTop = Math.floor(Math.random() * bubbleHeight); const buttonLeft = Math.floor(Math.random() * bubbleWidth);
        return (
          <StyledPopUpContainer>
            <SpeechBubble key={data.id} bubbleData={data} />
            <PopUpButton  positionTop={buttonTop} positionLeft={buttonLeft} key={data.popUpTitle} data={data} />
          </StyledPopUpContainer>
        );
      })}
    </StyledHeroContainer>
  );
};

export default Hero;
