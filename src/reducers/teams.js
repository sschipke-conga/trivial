const teams = (state = [], action) => {
  switch (action.type) {
    case 'SET_TEAMS':
      console.log('reducer', action)
      return action.teams
      
    default:
      return state
  }
}

export default teams;