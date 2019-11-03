const turnCount = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_TURN_COUNT':
      state++
      return state

    default:
      return state
  }
}

export default turnCount;