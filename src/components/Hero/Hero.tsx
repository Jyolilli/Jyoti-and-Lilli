import React, { useState} from "react";
import { StyledHeroContainer, ContainerWithRef } from "./Hero.style";
import { Text } from "@theme/components/Text";
import { colors } from "@theme/styles/colors";
import PopUpButton from "@components/PopUpButton/PopUpButton";
import SpeechBubble from "@components/bubbles/SpeechBubble";
import { bubbleData } from "@components/bubbles/bubbleData";

const Hero = () => {
  const [bubbleIdHighlighted, setbubbleIdHighlighted] = useState(false);
  const refContainer = React.createRef<HTMLDivElement>(); //this refContainer contains the node


  return (
    <StyledHeroContainer>
      <Text textAlign="center" color={`${colors.pinkOrange}`} variant="h1">
        wecodeo
      </Text>

      {bubbleData.map((data) => {
        const bubbleHeight = 111; const bubbleWidth = 335;
        const buttonTop = Math.floor(Math.random() * bubbleHeight); const buttonLeft = Math.floor(Math.random() * bubbleWidth);
        return (
          <ContainerWithRef ref={refContainer}>
            <SpeechBubble key={data.id} bubbleData={data} />
            <PopUpButton  positionTop={buttonTop} positionLeft={buttonLeft} key={data.popUpTitle} data={data} />
          </ContainerWithRef>
        );
      })}
    </StyledHeroContainer>
  );
};

export default Hero;
