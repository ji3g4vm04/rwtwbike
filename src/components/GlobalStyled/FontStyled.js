import { createGlobalStyle } from "styled-components";
import SairaConfensedRegular from './FontStyle/SairaCondensed-Regular.ttf'
import NotoSans from './FontStyle/NotoSansTC-Regular.otf';


export default createGlobalStyle`
  @font-face {
    font-family: custom-fonts;
    src: url(${SairaConfensedRegular});
    unicode-range: U+00-024F;
  }
  @font-face {
    font-family: custom-fonts;
    src: url(${NotoSans});
    unicode-range: U+4E00-9FFF;
  }
`;