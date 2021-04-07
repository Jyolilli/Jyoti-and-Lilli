import styled from "styled-components";

const StyledHeroContainer = styled.div`
  position: relative;
  padding: 10px;
  top: 50px;
  /* &:after {
    position: absolute;
    display: block;
    content: '';
    width: 100vw;
    background-color: #FED86B;
    bottom: -50;
    z-index: 1;
  } */
`;
const StyledArticle = styled.article`
  position: absolute;
  font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  color: blue;
  z-index: 3;
  padding: 30px;
  line-height: 1.2;
`;

export { StyledHeroContainer, StyledArticle };
