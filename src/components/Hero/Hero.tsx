import React from "react";
import { StyledHeroContainer } from "./Hero.style";
import { Text } from "@theme/components/Text";
import { colors } from "@theme/styles/colors";
import PopUpButton from "@components/PopUpButton/PopUpButton";
import { data } from "@components/PopUpButton/PopUpData";
import SpeechBubble from "@components/bubbles/SpeechBubble";
import { bubbleData } from "@components/bubbles/bubbleData";

const Hero = () => {
  return (
    <StyledHeroContainer>
      {data.map((data) => (
        <PopUpButton key={data.title} data={data} />
      ))}

      {bubbleData.map((data) => (
        <>
          <SpeechBubble key={data.id} bubbleData={data} />
        </>
      ))}

      <Text textAlign="center" color={`${colors.pinkOrange}`} variant="h1">
        wecode
      </Text>
    </StyledHeroContainer>
  );
};

export default Hero;
