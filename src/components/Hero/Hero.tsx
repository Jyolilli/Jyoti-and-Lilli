import React, { useState } from "react";
import { Text } from "@theme/components/Text";
import { Box } from "@theme/components/Box";
import { colors } from "@theme/styles/colors";
import styled from "styled-components";
import InputMessage from "@components/InputMessage";

type HeroProps = {
  getMessagesQuery: Function;
};

const Hero = (props: HeroProps) => {
  const [showNewMessage, setShowNewMessage] = useState(false);


  const StyledText = styled(Text)`
    margin-bottom: 5px;
  `;
  const StyledHeroContainer = styled.div`
    position: relative;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-bottom: 0.5px dotted var(--black, ${colors.lightBlue});
  `;
  const StyledButton = styled.button`
    color: white;
    background-color: cornflowerblue;
    padding: 5px;
    border: none;
    width: 7rem;
    justify-content: center;
    margin: 10px;

  `;
  const StyledCommentsContainer = styled.div`
    position: relative;
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  `;

  return (
    <StyledHeroContainer>
      <Box>
        <StyledText
          textAlign="center"
          color={`${colors.pinkOrange}`}
          variant="h1"
        >
          jyolilli
        </StyledText>
      </Box>
      <Text
        textAlign="center"
        color={`${colors.pinkOrange}`}
        variant="roofLine"
      >
        {" "}
        nifty + swifty code lizzards
      </Text>
      <StyledCommentsContainer>
        <StyledButton onClick={() => setShowNewMessage(!showNewMessage)}>
          New Speechbubble
        </StyledButton>
        {showNewMessage ? <InputMessage getMessagesQuery={props.getMessagesQuery}/> : null}
      </StyledCommentsContainer>
    </StyledHeroContainer>
  );
};

export default Hero;
