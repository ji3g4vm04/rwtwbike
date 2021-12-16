import React from "react";

import Cssreset from './Cssreset'
import GlobalCssSet from "./GlobalCssSet";
import FontStyled from './FontStyled';


const GlobalStyled = () => {
  return(
    <>
      <Cssreset />
      <GlobalCssSet />
      <FontStyled />
    </>
  )
}

export default GlobalStyled;