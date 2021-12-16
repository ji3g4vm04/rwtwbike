import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  .flex{
    display:flex;
  }
  *{
    box-sizing:border-box;
  }
  a{
    text-decoration:none;
  }
  .app{
    min-height:100vh;
    flex-direction:column;
  }
  #map{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index:5;
  }.marker-cluster-small {
    background-color: rgba(13,112,109,0.6);
  }
  .marker-cluster-small div {
    background-color: rgba(13,112,109,0.6);
    color: white;
  }
  .marker-cluster-medium {
    background-color: rgba(13,112,109,0.6);
  }
  .marker-cluster-medium div {
    background-color: rgba(13,112,109,0.6);
    color: white;
  }
  .marker-cluster-large {
    background-color: rgba(13,112,109,0.6);
  }
  .marker-cluster-large div {
    background-color: rgba(13,112,109,0.6);
    color: white;
  }
  .leaflet-oldie .marker-cluster-small {
    background-color: rgba(13,112,109,0.6);
  }
  .leaflet-oldie .marker-cluster-small div {
    background-color: rgba(13,112,109,0.6);
  }
  .leaflet-oldie .marker-cluster-medium {
    background-color: rgba(13,112,109,0.6);
  }
  .leaflet-oldie .marker-cluster-medium div {
    background-color: rgba(13,112,109,0.6);
  }
  .leaflet-oldie .marker-cluster-large {
    background-color: rgba(13,112,109,0.6);
  }
  .leaflet-oldie .marker-cluster-large div {
    background-color: rgba(13,112,109,0.6);
  }
  .marker-cluster {
    background-clip: padding-box;
    border-radius: 51px;
  }
  .marker-cluster div {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;
    text-align: center;
    border-radius: 15px;
    font: 12px "Helvetica Neue", Arial, Helvetica, sans-serif;
  }
  .marker-cluster span {
    line-height: 30px;
  }
  .leaflet-cluster-anim .leaflet-marker-icon,
  .leaflet-cluster-anim .leaflet-marker-shadow {
    -webkit-transition: -webkit-transform 0.3s ease-out, opacity 0.3s ease-in;
    -moz-transition: -moz-transform 0.3s ease-out, opacity 0.3s ease-in;
    -o-transition: -o-transform 0.3s ease-out, opacity 0.3s ease-in;
    transition: transform 0.3s ease-out, opacity 0.3s ease-in;
  }
  .leaflet-cluster-spider-leg {
    -webkit-transition: -webkit-stroke-dashoffset 0.3s ease-out,
      -webkit-stroke-opacity 0.3s ease-in;
    -moz-transition: -moz-stroke-dashoffset 0.3s ease-out,
      -moz-stroke-opacity 0.3s ease-in;
    -o-transition: -o-stroke-dashoffset 0.3s ease-out,
      -o-stroke-opacity 0.3s ease-in;
    transition: stroke-dashoffset 0.3s ease-out, stroke-opacity 0.3s ease-in;
  }
  .markerIcon{
    position:relative;
    .label{
      position:absolute;
      top:-60px;
      z-index:5;
    }
    .num{
      position:absolute;
      top:-45px;
      left:19px;
      transform:translateX(-50%);
      z-index:10;
      font-size:20px;
    }
  }
  .markerFont{
    position:absolute;
    font-size:28px;
    top:-55px;
    z-index:10;
  }
`;

