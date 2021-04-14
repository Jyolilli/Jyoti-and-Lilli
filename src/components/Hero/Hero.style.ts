import styled from "styled-components";
import { Text } from '@theme/components/Text';
import { colors } from '@theme/styles/colors';

const StyledHeroContainer = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledImageLight = styled.img`
  opacity: 0.5;
`;
const StyledImage = styled.img`
  
`;

const StyledArticle = styled(Text)`
  position: absolute;
  color: ${colors.primaryText};
  z-index: 3;
  padding: 30px;
  line-height: 1.2;
`;

export { StyledHeroContainer, StyledArticle, StyledImage, StyledImageLight };
