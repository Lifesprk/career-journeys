import css from 'styled-jsx/css';
import THEME from '../lib/theme';

const styles = css.global`
  html {
    font-size: 10px; // for rems
    font-family: Helvetica, sans-serif
  }

  body {
    font-size: 16px;
  }

  .hidden-anchor-root {
    position: relative;
  }

  .hidden-anchor {
    visibility: hidden;
    position: absolute;
    top: ${THEME.anchorTopOffset};
  }
`;

export default styles;
