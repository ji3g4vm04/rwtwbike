import React from "react";
import { 
  useRef,
  useEffect,
  useState

} from "react";
import styled from "styled-components";

import Map from "./Map";
import StationSearch from "./StationSearch";
import { Citys } from "./CitysData";
import StationStatus from "./StationStatus";

const Mapcomponent = ({
  className
}) => {
  const [location,setLocation] = useState([25,121]);
  const [targetStation,setTargetStation] = useState(null);

  return(
    <main
    className={`mapContainer ${className}`}
    >
      <StationSearch
        className='posSet'
      />
      {
        targetStation?
        <StationStatus
        className='statusSet'
        targetStation={targetStation}
        />:
        null
      }
      <Map
      location={location}
      setTargetStation={setTargetStation}
      />
    </main>
  )
}


export default styled(Mapcomponent)`
  position:relative;
  flex:1;
  .posSet{
    margin:38px 0 0 61px;
  }
  .statusSet{
    position:absolute;
    z-index:10;
    left:61px;
    bottom:31px;
  }
`;