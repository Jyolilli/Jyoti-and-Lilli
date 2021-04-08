import React from "react";
import { StyledHeroContainer, StyledArticle, StyledImage } from "./Hero.style";
import { Text } from "@theme/components/Text";
import { colors } from '@theme/styles/colors';
import Bubble from "@public/images/bubble.svg";

const Hero = () => {
  return (
    <div>
      <StyledHeroContainer>
        <Text color={`${colors.pinkOrange}`} variant="h1">Together we code</Text>
        <StyledArticle variant="mediumText">
          Sure I do, we met in June 2020 at a Berlin Codebar. (You don’t know
          Codebar? It’s awesome!**) we shared a coach that night and since we
          both worked on a React Project and were preparing for interviews, we
          started to work on a project together.
        </StyledArticle>
        <StyledImage src={Bubble} />
      </StyledHeroContainer>
    </div>
  );
};

export default Hero;
