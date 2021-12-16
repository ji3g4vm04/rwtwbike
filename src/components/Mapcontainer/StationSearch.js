import React from "react";
import styled from "styled-components";
import { FontSize } from "../GlobalStyled/commonStyled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Citys } from "./CitysData";
import { BikeStationGet,BikeStationAvailability } from "../../state/actions";

const StationSearch = ({
  className
}) => {
  const [City,setCity] = useState(''); 
  const Dispatch = useDispatch();
  const CityOptions = Citys.map((city) => {
    return(
      <option
      value={city.value}
      key={city.value}
      >
        {city.name}
      </option>
    )
  })

  const onClick = () => {
    if(!City || City === 'null') return;
    Dispatch(BikeStationGet(City));
    Dispatch(BikeStationAvailability(City));
  }

  return(
    <div
    className={className}
    >
      <h2
      className='title'
      >
        尋找站點
      </h2>
      <div
        className='locationSelector-container'
      >
        <div
          className='locationSelector'
        >
          <div
            className='selectContainer'
          >
            <label>
              選擇縣市
            </label>
            <select
              value={City}
              onChange={(e) => setCity(e.target.value)}
            >
              <option
                value='null'
              >
                請選擇
              </option>
              {CityOptions}
            </select>
          </div>
        </div>
        <button
          type='button'
          className='StationSearchBtn'
          onClick={onClick}
        >
          尋找站點
        </button>
      </div>
    </div>
  )
}


export default styled(StationSearch)`
  position:absolute;
  z-index:10;
  width:305px;
  font-family:custom-fonts;
  .title{
    ${FontSize(24,56)};
    text-align:center;
    background:${({theme}) => theme.color.white};
    border:1px solid #707070;
    margin-bottom:52px;
  }
  .locationSelector-container{
    .locationSelector{
      background:#fff;
      border:1px solid #707070;
      padding:16px 41px;
    }
    .StationSearchBtn{
      ${FontSize(24,68)};
      width:100%;
      background:${({theme}) => theme.color.Green};
      border:1px solid #707070;
      text-align:center;
      cursor:pointer;
      color:#fff;
      font-family:custom-fonts;
    }
    .selectContainer{
      select,label{
        display:block;
      }
      label{
        ${FontSize(18,30)};
      }
      select{
        font-family:custom-fonts;
        width:100%;
        ${FontSize(16,40)};
        padding:8px 16px;
        color:${({theme}) => theme.color.Green}
      }
    }
  }
`;