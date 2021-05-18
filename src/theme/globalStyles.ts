import { createGlobalStyle } from 'styled-components';
import { colors} from './styles/colors';
import { fonts} from './styles/fonts';

import img from '../images/wallpaper.jpg'
const GlobalStyles = createGlobalStyle`

body {
    background-color: ${colors.orange};
    background-image: url(${img});
    background-repeat: no-repeat;
  background-position: left;
  background-size: cover;

}
/* CSS for printing */

@media print {

  .hiddenInPrint {
    display: none !important;
    visibility: hidden !important;
  }

  .printVisible {
    display: block !important;
  }

  * {
    color: black !important;
  }

  header, footer, nav, svg, img, hr  {
    display: none !important;
  }

  h2 {
    margin: 4rem 0 2rem 0 !important;
  }

  a {
    border: none !important;
  }


  li {
    list-style-type: disc !important;
    display: list-item !important;
    list-style-position: inside !important;
  }

  div {
    display: block !important;
    width: 100% !important;
    float: none !important;
    position: initial !important;
    background: none !important;
    background-image: none !important;
    border: none !important;
    min-height: initial !important;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }

  span {
    display: inline-block !important;
    width: 100% !important;
    float: none !important;
    position: initial !important;
  }

  div {
    padding: initial !important;
  }

  * {
    max-width: 100% !important;
    position: initial !important;
    height: auto !important;
  }

  :before, :after {
    display: none !important;
  }

}


 /* Reset CSS for screens */

  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

    @media screen {

      .printVisible {
        display: none !important;
      }

      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed,
      figure, figcaption, footer, header, hgroup,
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure,
      footer, header, hgroup, menu, nav, section {
        display: block;
      }

      body {
        font-family: ${fonts.ambleRegular};
        line-height: 1;
        overflow-x: hidden;
        max-width: 100vw;
        width: 100vw;
        margin: 0px;
      }

      .isOverflowHidden {
        overflow-y: hidden;
        height:100%;
      }

      blockquote, q {
        quotes: none;
      }

      blockquote:before, blockquote:after,
      q:before, q:after {
        content: '';
        content: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      /* NOTE: the following properties are not part of http://meyerweb.com/eric/tools/css/reset/ */

      html {
        /* NOTE: font smoothing is not supported in IE and Andriod so may not apply so it is more consistent across browsers
        https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* NOTE: not supported in older browsers but it is a UX enchancer so it is not a required effect
        https://caniuse.com/?search=scroll-behavior */
        scroll-behavior: smooth;
      }

      #root {
        overflow: hidden;
        padding: 0;
        max-width: 100vw;
      }

      hr {
        border: none;
        height: 1px;
        color: ${colors.primaryText}; /* for old IE */
        background-color: ${colors.primaryText};
        margin-top: 2px;
      }

      button {
        padding: 0;
      }

      sup {
        vertical-align: super;
        font-size: smaller;
      }

      // TODO: refactor StyledLink and use global
      a {
          &:focus,
          &:hover,
          &:visited,
          &:active {
            text-decoration: none;
          }
      }
    }
`;

export default GlobalStyles;
