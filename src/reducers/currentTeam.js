const currentTeam = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TEAM':
      return action.team
      
    default:
      return state
  }
}

export default currentTeam;