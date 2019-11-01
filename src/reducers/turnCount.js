const teams = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_TURN_COUNT':
      console.log(action, state)
      state++
      return state

    default:
      return state
  }
}

export default teams;