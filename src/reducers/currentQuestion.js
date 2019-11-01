const currentQuestion = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_QUESTION':
      return action.currentQuestion
    default:
      return state
  }
}

export default currentQuestion;