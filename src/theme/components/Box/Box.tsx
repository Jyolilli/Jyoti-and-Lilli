import styled from 'styled-components'
import { BoxProps } from './Box.props';
import { background, border, color, flexbox, layout, flex, position, shadow, space, typography } from 'styled-system';

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  background, border, color, flexbox, layout, position, shadow, space, typography, flex
)

export { Box };