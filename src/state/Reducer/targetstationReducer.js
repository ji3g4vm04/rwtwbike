export default (state = null,actions) => {
  switch(actions.type){
    case 'STATION_INDEX':
      return {...actions.payload};
    default:
      return {...state}
  }
}