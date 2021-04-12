import {
    BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    FlexProps,
    TypographyProps,
  } from 'styled-system';
  
  /**
   * BoxProps
   */
  type BoxProps = BackgroundProps &
    BorderProps &
    ColorProps &
    FlexboxProps &
    LayoutProps &
    PositionProps &
    ShadowProps &
    SpaceProps &
    TypographyProps &
    FlexProps;
  
  export { BoxProps };