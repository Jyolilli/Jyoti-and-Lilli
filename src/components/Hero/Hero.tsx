import React from "react";
import {
  StyledHeroContainer,
  StyledArticle,
  StyledImage,
  StyledImageLight,
} from "./Hero.style";
import { Text } from "@theme/components/Text";
import { Box } from "@theme/components/Box";
import { colors } from "@theme/styles/colors";
import MediumBubbleLeft from "@public/images/bubble_m_left.svg";
import SmallBubbleRight from "@public/images/bubble_s_right.svg";
import SmallBubbleLeft from "@public/images/bubble_s_left.svg";

const Hero = () => {
  return (
    <div>
      <StyledHeroContainer>
        <Box justifyContent={"center"}>
          <Text color={`${colors.pinkOrange}`} variant="h1">
            Together we code
          </Text>
        </Box>
        <Box pb={3}>
          <StyledArticle variant="mediumText">
            Sure I do, we met in June 2020 at a Berlin Codebar. (You don’t know
            Codebar? It’s awesome!**)
          </StyledArticle>
        </Box>
        <StyledImage src={SmallBubbleLeft} />
        <Box pb={3}>
          <StyledArticle variant="mediumText">
            Sure I do, we met in June 2020 at a Berlin Codebar. (You don’t know
            Codebar? It’s awesome!**)
          </StyledArticle>
        </Box>
        <StyledImageLight src={SmallBubbleRight} />
        <Box>
          <StyledArticle variant="mediumText">
            Sure I do, we met in June 2020 at a Berlin Codebar. (You don’t know
            Codebar? It’s awesome!**) we shared a coach that night and since we
            both worked on a React Project and were preparing for interviews, we
            started to work on a project together.
          </StyledArticle>
        </Box>
        <StyledImage src={MediumBubbleLeft} />
        <Box pb={3}>
          <StyledArticle variant="mediumText">
            Sure I do, we met in June 2020 at a Berlin Codebar. (You don’t know
            Codebar? It’s awesome!**)
          </StyledArticle>
        </Box>
        <StyledImageLight src={SmallBubbleRight} />
      </StyledHeroContainer>
    </div>
  );
};

export default Hero;
