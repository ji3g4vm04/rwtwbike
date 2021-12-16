import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontSize } from "../GlobalStyled/commonStyled";
import { useSelector } from "react-redux";
import { Bicycle,BicycleTrun } from "../Icon";

const StationStatus = ({
  className,
  targetStation
}) => {
  const [now,setNow] = useState(null);
  const [updateTime,setUpdateTime] = useState(null);
  useEffect(() => {
    console.log(targetStation)
    setNow(() => new Date(targetStation.UpdateTime));
  },[targetStation])
  useEffect(() => {
    if(!now) return;
    setUpdateTime(() => `更新時間: ${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`)
  },[now]);
  const StationStatusNow = (type) => {
    // eslint-disable-next-line default-case
    switch(type){
      case 0:
        return '停止營運';
      case 1:
        return '正常營運';
      case 2:
        return '暫停營運';
    }
  }
  const nameFilter = (name) => {
    if(name.slice(0,11) === 'YouBike2.0_' || name.slice(0,11) === 'YouBike1.0_'){
      console.log('a')
      return name.slice(11);
    }
    console.log(name)
    return name;
  }
  return(
    <div className={`${className}`}>
      <div className='station-title'>
        <h2>
          {nameFilter(targetStation.StationName.Zh_tw)}
          {/* {targetStation?targetStation.StationName.Zh_tw.slice(11):'unknow'} */}
        </h2>
        <p>
          {targetStation?targetStation.StationAddress.Zh_tw:'unknow'}
        </p>
      </div>
      <div className='station-status flex'>
        <div
          className='status-color'
        />
        <span>
          {StationStatusNow(targetStation.ServiceStatus)}
        </span>
      </div>
      <div className='station-bikeNum flex'>
        <div className='bikeNum-space flex'>
          <Bicycle />
          <span className='space-num'>
            {targetStation?targetStation.AvailableRentBikes:'unknow'}
          </span>
          <span>
            可租借
          </span>
        </div>
        <div className='bikeNum-space flex'>
          <BicycleTrun />
          <span className='space-num'>
            {targetStation?targetStation.AvailableReturnBikes:'unknow'}
          </span>
          <span>
            可租借
          </span>
        </div>
      </div>
      <div className='station-detail'>
        <div className='detail-distance'>
          {updateTime}
        </div>
      </div>
    </div>
  )
}

export default styled(StationStatus)`
  padding:21px 31px 11px 41px;
  background:#fff;
  border:1px solid #707070;
  width:541px;
  height:259px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-shadow:5px 5px 1px rgba(112, 112, 112, 0.8);
  .station-title{
    h2{
      ${FontSize(36,53)};
    }
  }
  .station-status{
    align-items:center;
    .status-color{
      background:#707070;
      width:153px;
      height:17px;
    }
  }
  .station-bikeNum{
    .bikeNum-space{
      align-items:flex-end;
      justify-content:space-between;
      padding:0 21px;
      width:50%;
      .space-num{
        ${FontSize(80,64)}
      }
    }
  }
  .detail-distance{
    text-align:end;
  }
`;