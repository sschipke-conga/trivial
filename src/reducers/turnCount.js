const teams = (state = 0, action) => {
  switch (action.type) {
    case 'UP_TURN':
      return state++
    default:
      return state
  }
}

export default teams;