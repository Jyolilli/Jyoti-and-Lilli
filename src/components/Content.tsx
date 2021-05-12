import React from "react";
import PopUpButton from "./PopUpButton/PopUpButton";
import SpeechBubble from "./bubbles/SpeechBubble";
import { bubbleData } from "./bubbles/bubbleData";
import styled from "styled-components";

const Content = () => {
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
      {bubbleData.map((data) => {
        const bubbleHeight = 111;
        const bubbleWidth = 335;
        const buttonMax = 50;
        const buttonTop = Math.floor(Math.random() * bubbleHeight);
        const buttonLeft = Math.floor(Math.random() * bubbleWidth);
        const buttonHeight = Math.floor(Math.random() * buttonMax) + 50;
        return (
          <StyledPopUpContainer>
            <SpeechBubble key={data.id} bubbleData={data} />
            <PopUpButton
              buttonHeight={buttonHeight}
              positionTop={buttonTop}
              positionLeft={buttonLeft}
              key={data.popUpTitle}
              data={data}
            />
          </StyledPopUpContainer>
        );
      })}
    </StyledContentContainer>
  );
};

export default Content;
