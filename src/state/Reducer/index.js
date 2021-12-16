import { combineReducers } from "redux";
import bikestation from "./bikestation";
import stationavailabilityReducer from "./stationavailabilityReducer";
import targetstationReducer from "./targetstationReducer";


export default combineReducers({
  bikestation,
  StationAvailability: stationavailabilityReducer,
  StationIndex: targetstationReducer 
});