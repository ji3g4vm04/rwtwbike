import React, { useState } from "react";
import { useEffect,useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import L from 'leaflet';
import { divIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import { MapContainer,TileLayer,Marker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { PopupIcon } from "../Icon";
import { TargetStation } from "../../state/actions";


const Map = ({
  location,
  setTargetStation
}) => {
  const Dispatch = useDispatch();
  const Stations = useSelector(state => state.bikestation);
  const StationStatus = useSelector(state => state.StationAvailability);
  const mapRef = useRef();
  const [markers,setMarkers] = useState(null);
  
  useEffect(() => {
    if(mapRef.current){
      console.log(mapRef)
      mapRef.current.flyTo(location,11)
    }
  },[location])
  useEffect(() => {
    if(Object.values(Stations).length !== Object.values(StationStatus).length) return;
    if(Stations && Object.values(Stations).length){
      setMarkers(Object.values(Stations).map((item,index) => {
        const iconPerson = new L.divIcon({
          iconSize:[0, 0],
          html:`
            <div class='markerIcon'>
              <svg 
              class='label'
              width="39" height="60" viewBox="0 0 55 88" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.37909 0.444946V72.2831L0.566406 87.3859L54.7131 72.2831V0.444946H6.37909Z" fill="white" stroke="black" stroke-miterlimit="10"/> 
              </svg>   
              <div class='num'>
                ${StationStatus[index].AvailableRentBikes}
              </div>       
            </div>
          `
        })
        return(
          <Marker
          key={item.StationUID}
          position={[item.StationPosition.PositionLat,item.StationPosition.PositionLon]}
          icon={iconPerson}
          eventHandlers={{
            click: (e)=>{
              setTargetStation({...StationStatus[index],...Stations[index]});
            }
          }}
          >
          </Marker>
        )
      })
      )
      setTargetStation(null);
    }
  },[StationStatus , Stations])
  useEffect(() => {
    if(mapRef.current){
      mapRef.current.flyTo(
        [Object.values(Stations)[0].StationPosition.PositionLat,
        Object.values(Stations)[0].StationPosition.PositionLon],
        11
        )
      }
  },[markers])
  return(
    <MapContainer
      id='map'
      center={[25, 121]}
      zoom={13}
      scrollWheelZoom={true}
      whenCreated={(map) => { mapRef.current = map }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {markers}
      </MarkerClusterGroup>
    </MapContainer>
    )
}


export default Map;