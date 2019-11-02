const currentQuestion = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_QUESTION':
      return action.currentQuestion

      case 'RESET_CURRENT_QUESTION':
      return null

    default:
      return state
  }
}

export default currentQuestion;