export const setTeams = (teams) => ({
  type: 'SET_TEAMS',
  teams
})

export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  questions
})

export const setCurrentQuestion = (currentQuestion) => ({
  type: 'SET_CURRENT_QUESTION',
  currentQuestion
})

export const increaseTurnCount = () => ({
  type: 'INCREASE_TURN_COUNT'
})