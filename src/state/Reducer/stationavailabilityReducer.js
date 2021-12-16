export default (state = null,actions) => {
  switch(actions.type){
    case 'BIKESTATION_AVAILABILITY':
      return {...actions.payload};
    default:
      return {...state}
  }
}