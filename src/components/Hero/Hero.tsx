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
import PopUpButton from "@components/PopUpButton/PopUpButton";
import { data } from "@components/PopUpButton/PopUpData";

const Hero = () => {
  const title = "Infobox";

  return (
    <StyledHeroContainer>
      <PopUpButton data={data} />
      <Text textAlign="center" color={`${colors.pinkOrange}`} variant="h1">
        wecode
      </Text>
      <Box pb={3}>
        <StyledArticle variant="mediumText">
          Hey Jyoti, do you remember how we met?
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
          Yeah, you had this quite impressive React Project you worked on. I
          realised you where a step ahead of me and that we'd be a perfect match
          for a study-group.
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
  );
};

export default Hero;
