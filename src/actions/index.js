

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

export const setCurrentTeam = team => ({
  type: 'SET_CURRENT_TEAM',
  team
})

export const updateScore = () => ({
  type: 'UPDATE_SCORE'
})

export const resetCurrentQuestion = () => ({
  type: 'RESET_CURRENT_QUESTION'
})

export const setHaveQuestions = () => ({
  type: 'HAVE_QUESTIONS'
})