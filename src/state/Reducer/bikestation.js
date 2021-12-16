

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = null,actions) => {
  switch(actions.type){
    case 'BIKESTATION':
      return {...actions.payload};
    default:
      return {...state}
  }
}