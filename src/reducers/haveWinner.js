const haveWinner = (state = false, action) => {
  switch (action.type) {
    case 'WINNER':
      state = true
      return state
    default:
      return state
  }
}

export default haveWinner;