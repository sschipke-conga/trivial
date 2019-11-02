const teams = (state = [], action) => {
  switch (action.type) {
    case 'SET_TEAMS':
      return action.teams

      case 'UPDATE_SCORE':
        return [...state]
      
    default:
      return state
  }
}

export default teams;