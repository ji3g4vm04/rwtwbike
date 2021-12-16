import React from "react";

import styled from "styled-components";

import TitleContainer from "./TitleContainer";


const Header = ({
  className
}) => {
  return(
    <header className={className}>
      <div className='header-container flex'>
          <TitleContainer />
      </div>
    </header>
  )
}

export default styled(Header)`
  height:95px;
  background: ${({theme}) => theme.color.Green };
  display:flex;
  justify-content:center;
  *{
    color: ${({theme}) => theme.color.white }
  }
  .header-container{
    padding: 0 82px 0 92px;
    width:100%;
    max-width:1440px;
    font-family:custom-fonts;
  }
`;