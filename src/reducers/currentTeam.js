const currentTeam = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TEAM':
      return action.currentTeam
      
    default:
      return state
  }
}

export default currentTeam;