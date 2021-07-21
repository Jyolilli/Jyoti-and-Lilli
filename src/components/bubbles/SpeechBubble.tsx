import React from "react";
import {
  StyledArticle,
} from "./SpeechBubble.style";
import { Box } from "@theme/components/Box";
import {Message} from "../../types"

const bubble = "/images/bubble_s_left.svg";

type SpeechBubbleProps = {
    bubbleData: Message
    };


const SpeechBubble = (props: SpeechBubbleProps) => {
    const { bubbleData } = props;
  return (
    <>
      <Box pb={3}>
        <StyledArticle variant="mediumText">
          {bubbleData.message}
        </StyledArticle>
      </Box>
      <img src={bubble} />
    </>
  );
};

export default SpeechBubble;
