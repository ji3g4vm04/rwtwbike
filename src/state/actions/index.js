import axios from "axios";
import store from "..";
import { GetAuthorizationHeader } from "./TDXAuthorization";

export const BikeStationGet = (City) => async dispatch => {
  console.log(City)
  const response = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/${City}`,{
    headers:GetAuthorizationHeader(),
    params:{
      $format: JSON
    }
  });
  dispatch({
    type:'BIKESTATION',
    payload:response.data
  })
}

export const BikeStationAvailability = (City) => async dispatch => {
  console.log(City)
  const response = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/${City}`,{
    headers:GetAuthorizationHeader(),
    params:{
      $format: JSON
    }
  });
  dispatch({
    type:'BIKESTATION_AVAILABILITY',
    payload:response.data
  })
  console.log(store.getState())
}

export const TargetStation = (index) => dispatch => {
  const Station = {...store.getState().StationAvailability[index],...store.getState().bikestation[index]};
  dispatch({
    type:'STATION_INDEX',
    payload: {
      Station
    }
  })
}