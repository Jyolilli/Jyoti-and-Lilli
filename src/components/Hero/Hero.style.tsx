import styled from "styled-components";
import React from "react";

const StyledHeroContainer = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;


const StyledPopUpContainer = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const ContainerWithRef = React.forwardRef<any, HTMLDivElement>((props, ref) => (
  <div ref={ref}>
    {props.children}
  </div>

)


export { StyledHeroContainer, ContainerWithRef };
