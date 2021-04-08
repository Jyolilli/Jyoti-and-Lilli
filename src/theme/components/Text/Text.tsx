import { TextProps } from './Text.props';
import styled from 'styled-components';
import { color, typography, layout } from 'styled-system';
import { variant } from './Text.style';

/**
 * <Text />
 */
const Text = styled.p<TextProps>(variant, color, typography, layout);

export { Text };
