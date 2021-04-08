import { ColorProps, TypographyProps, LayoutProps, VariantArgs } from 'styled-system';

/**
 * TextProps
 */
type TextProps = VariantArgs &
  ColorProps &
  LayoutProps &
  TypographyProps & {
    variant: TextVariant;
  };

/**
 * TextVariant
 */
type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'mediumText'
  | 'mediumTextModal'
  | 'lightText'
  | 'smallText'
  | 'roofLine'

export { TextProps, TextVariant };
