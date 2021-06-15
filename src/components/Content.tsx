import React from "react";
import PopUpButton from "./PopUpButton/PopUpButton";
import SpeechBubble from "./bubbles/SpeechBubble";
// import { bubblemessage } from "./bubbles/bubblemessage";
import styled from "styled-components";

type ContentProps = {
  messages: {
    id?: number;
    title?: string;
    message?: string;
  }[];
};

const Content = (props: ContentProps) => {
  const StyledContentContainer = styled.div`
    overflow: hidden;
    margin: 0 auto;
    max-width: 30rem;
  `;

  const StyledPopUpContainer = styled.div`
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: column;
  `;

  return (
    <StyledContentContainer>
      {props.messages && props.messages.map((message) => {
      
        const bubbleHeight = 111;
        const bubbleWidth = 335;
        const buttonMax = 50;
        const buttonTop = Math.floor(Math.random() * bubbleHeight);
        const buttonLeft = Math.floor(Math.random() * bubbleWidth);
        const buttonHeight = Math.floor(Math.random() * buttonMax) + 50;
        return (
          <StyledPopUpContainer>
            {message.message}
            <SpeechBubble key={message.id} data={message} />
            {/* <PopUpButton
              buttonHeight={buttonHeight}
              positionTop={buttonTop}
              positionLeft={buttonLeft}
              key={message.popUpTitle}
              // message={message}
            /> */}
          </StyledPopUpContainer>
        );
      })}
    </StyledContentContainer>
  );
};

export default Content;
