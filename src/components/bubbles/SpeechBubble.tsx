import React from "react";
import {
  StyledArticle,
} from "./SpeechBubble.style";
import { Box } from "@theme/components/Box";
import {Message} from "../../types"

const bubble = "/images/bubble_s_left.svg";

type SpeechBubbleProps = {
  bubbleData: Message
  sender: Message["sender"]
    };

// weitermachen: Sender rendern! Warum geht es nicht? In props nicht richtig definiert..

const SpeechBubble = (props: SpeechBubbleProps) => {
  const { bubbleData } = props;
  console.log("sender:", bubbleData.sender)
  return (
    <>
      <Box pb={3}>
        <StyledArticle variant="mediumText">
          {bubbleData.message}
          {bubbleData.sender}
        </StyledArticle>
      </Box>
      <img src={bubble} />
    </>
  );
};

export default SpeechBubble;
