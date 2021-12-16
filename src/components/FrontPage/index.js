import React from "react";
import styled from "styled-components";

import banner from '../images/banner.jpg';
import { FontSize } from "../GlobalStyled/commonStyled";
import { Link } from "react-router-dom";
const FrontPage = ({
  className
}) => {
  return(
    <main className={`${className} flex`}>
      <div className='FrontPage-Container'>
        <div className='FrontPage-content'>
          <div className='FrontPage-content-title flex'>
            <h2 className='title'>
              台灣共享單車地圖
            </h2>
            <div className='content-container'>
              <div className='content'>
                <p>
                  RIDE LIKE THE
                </p>
                <p>
                  WIND__
                </p>
                <p>
                  TAIWAN
                </p>
              </div>
            </div>
          </div>
          <div className='FrontPage-routerLink'>
            <Link
            className='Link'
            to='/StationSearch'
            >
              立即尋找站點
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default styled(FrontPage)`
  flex:1;
  background:${({theme}) => theme.color.GrayOne};
  align-items:center;
  justify-content:center;
  .FrontPage-Container{
    position:relative;
    font-family:custom-fonts;
    width:1034px;
    height:618px;
    border:1px solid black;
    .FrontPage-content{
      height:100%;
      padding:81px 0 0 60px;
      background:url(${banner});
      background-size:cover;
      .FrontPage-content-title{
        justify-content:space-between;
        align-items:flex-start;
        .title{
          ${FontSize(24,56)};
          width:305px;
          text-align:center;
          color:${({theme}) => theme.color.white};
          border:1px solid #fff;
          letter-spacing:.3rem;
        }
        .content-container{
          position:relative;
          transform:translateX(20px);
          .content{
            ${FontSize(44,54)};
            background:${({theme}) => theme.color.white};
            padding:15px 71px 17px 31px;
            height:200px;
            width:333px;
            color:${({theme}) => theme.color.GrayTwo};
            z-index:1;
            border:1px solid black;
          }
          &::after{
            content:'';
            position:absolute;
            z-index:-1;
            width:100%;
            height:100%;
            left:7px;
            top:7px;
            background:#fff;
            border:1px solid black;
          }
        }
      }
    }
    .FrontPage-routerLink{
      transform:translateX(20px);
      position:absolute;
      bottom:105px;
      right:0;
      .Link{
        display:block;
        text-align:center;
        width:337px;
        ${FontSize(24,80)};
        background:${({theme}) => theme.color.white};
        border:1px solid black;
        color:${({theme}) => theme.color.GrayTwo}
      }
      &::after{
        content:'';
        position:absolute;
        z-index:-1;
        width:100%;
        height:100%;
        left:7px;
        top:7px;
        background:#fff;
        border:1px solid black;
      }
    }
  }
`;