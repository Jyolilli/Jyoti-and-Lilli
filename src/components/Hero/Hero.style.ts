import styled from 'styled-components';


const StyledHeroContainer = styled.div`
  position: relative;
  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 100vw;
    background-color: #FED86B;
    bottom: -50;
    z-index: 1;
  }
`;

export { StyledHeroContainer };