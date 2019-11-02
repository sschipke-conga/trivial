const haveQuestions = (state = false, action) => {
  switch (action.type) {
    case 'HAVE_QUESTIONS':
      state = true
      return state
    default:
      return state
  }
}

export default haveQuestions;