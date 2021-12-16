import React from "react";
import styled from "styled-components";

import { Logo } from "../Icon";

const TitleContainer = ({
  className
}) => {
  return(
    <div className={`${className} flex`}>
      <Logo />      
      <div
       className='title'
      >
        <h2>
          RWTW
        </h2>
        <p>
          Ride like the wind!
        </p>
      </div>
    </div>
  )
}

export default styled(TitleContainer)`
  align-items:center;
  .title{
    margin-left:12px;
    p{
      letter-spacing:.3rem;
    }
  }
`;
