import React from "react";
import {
  StyledArticle,
} from "./SpeechBubble.style";
import { Box } from "@theme/components/Box";

type SpeechBubbleProps = {
    data: {
      id?: number;
      title?: string;
      message?: string;
    };
  };

const SpeechBubble = (props: SpeechBubbleProps) => {
    const { data } = props;
    console.log("Speechbubble data:", data)
  return (
    <>
      <Box pb={3}>
        <StyledArticle variant="mediumText">
          {data.message}
        </StyledArticle>
      </Box>
      {/* <img src={data.bubble} /> */}
    </>
  );
};

export default SpeechBubble;
