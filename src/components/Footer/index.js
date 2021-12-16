import React from "react";
import styled from "styled-components";

//Common Styled import
import { FontSize } from "../GlobalStyled/commonStyled";

const Footer = ({
  className
}) => {
  return(
    <footer className={className}>
      To be free again.
    </footer>
  )
}

export default styled(Footer)`
  background:${({theme}) => theme.color.Green};
  ${FontSize(18,46)}
  font-family:custom-fonts;
  color:${({theme}) => theme.color.white};
  text-align:center;
`;