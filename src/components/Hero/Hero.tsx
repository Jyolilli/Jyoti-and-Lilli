import React from "react";
import styled from "styled-components";
import { StyledHeroContainer, StyledArticle } from "./Hero.style";
// import { Box, Text, Spacer } from '@theme/components';
// import {useHeroProps} from './Hero.props';
import Bubble from "../../../public/images/bubble.svg";

// type HeroProps  = {
// }

const Hero = () => {
  return (
    <div>
      <StyledHeroContainer>
      <StyledArticle>
        Sure I do, we met in June 2020 at a Berlin Codebar. (You don’t know
        Codebar? It’s awesome!**) we shared a coach that night and since we both
        worked on a React Project and were preparing for interviews, we started
        to work on a project together.
      </StyledArticle>
        <img src={Bubble} />
      </StyledHeroContainer>
    </div>
  );
};

export default Hero;
