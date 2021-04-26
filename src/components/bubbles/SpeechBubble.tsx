import React from "react";
import {
  StyledArticle,
  StyledImage,
} from "./SpeechBubble.style";
import { Box } from "@theme/components/Box";

type SpeechBubbleProps = {
    bubbleData: {
      id?: number;
      copy?: string;
      bubble?: string;
    };
  };

const SpeechBubble = (props: SpeechBubbleProps) => {
    const { bubbleData } = props;
  return (
    <>
      <Box pb={3}>
        <StyledArticle variant="mediumText">
          {bubbleData.copy}
        </StyledArticle>
      </Box>
      <img src={bubbleData.bubble} />
    </>
  );
};

export default SpeechBubble;
