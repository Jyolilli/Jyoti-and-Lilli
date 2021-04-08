import { variant as _variant } from 'styled-system';
import { fonts, fontWeight, fontStyle } from '@theme/styles/fonts'

const px = (sizes: (number | null)[]) =>
  sizes.map((size: number | null) => {
    if (!size) return size;

    return `${size}px`;
  });

/**
 * Text variant base on the Sketch Typography styleguide with responsive font-size and line-height
 * Internal Google Drive link with the Sketch file: https://drive.google.com/drive/folders/19TIHENmXKvA3motgjtILY-RgSaBQOQaw
 */
const variant = _variant({
  prop: 'variant',

  variants: {
    h1: {
      fontFamily: fonts.ambleBold,
      fontWeight: fontWeight.normal,
      fontStyle: fontStyle.normal,
      fontSize: px([40, null, null, null, 60, null]),
      lineHeight: px([48, null, null, null, 80, null]),
    },

    h2: {
      fontFamily: fonts.ambleBold,
      fontWeight: fontWeight.normal,
      fontStyle: fontStyle.normal,
      fontSize: px([30, null, null, 30, 40, null]),
      lineHeight: px([36, null, null, 36, 48, null]),
    },

    h3: {
      fontFamily: fonts.ambleBold,
      fontWeight: fontWeight.normal,
      fontStyle: fontStyle.normal,
      fontSize: px([18, null, null, null, null, null]),
      lineHeight: px([18, null, null, null, null, null]),
    },

    // Basic body font
    mediumText: {
      fontFamily: fonts.ambleRegular,
      fontSize: px([15, null, null, 15, 18, 20]),
      lineHeight: px([22, null, null, 22, 28, 32]),
    },

    // Modal body font
    mediumTextModal: {
      fontFamily: fonts.ambleRegular,
      fontSize: px([15, null, null, null, null, 18]),
      lineHeight: px([22, null, null, null, null, 28]),
    },

    // Basic body font for standalone lists or buttons (smaller line height)
    lightText: {
      fontFamily: fonts.ambleLight,
      fontWeight: fontWeight.normal,
      fontStyle: fontStyle.normal,
      fontSize: px([15, null, null, 15, 18, 20]),
      lineHeight: px([22, null, null, 22, 22, 26]),
    },

    // Smaller body font - Footer
    smallText: {
      fontFamily: fonts.ambleRegular,
      fontSize: px([12, null, null, null, null, 15]),
      lineHeight: px([16, null, null, null, null, 22]),
    },

    roofLine: {
      fontFamily: fonts.ambleItalic,
      fontWeight: fontWeight.normal,
      fontStyle: fontStyle.normal,
      fontSize: px([15, null, null, null, null, 18]),
      lineHeight: px([20, null, null, null, null, 28]),
    },
  },
});

export { variant };
