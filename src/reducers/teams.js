const teams = (state = [], action) => {
  switch (action.type) {
    case 'SET_TEAMS':
      return action.teams
      
    default:
      return state
  }
}

export default teams;