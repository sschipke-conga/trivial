export const shuffle = answers => {
  var m = answers.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = answers[m];
    answers[m] = answers[i];
    answers[i] = t;
  }
  return answers;
}

export const determineCurrentTeam = (turnCount) => {
  if (turnCount % 2 === 0) {
    return 1
  } 
  return 0
}

export const determineWinner = teams => {
  if(teams[0].score === teams[1].score) {
    return false
  }
  return teams.sort((teamOne, teamTwo) => {
    return teamTwo.score-teamOne.score
  })[0]
}

export const capDifficulty = difficulty => {
  return difficulty[0].toUpperCase() + difficulty.slice(1)
}

export const cleanEncoding = (string) => {
  let cleanPhrase = string.replace(/&#039;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&eacute/g, 'é');
  return cleanPhrase
}

export const cleanQuestions = (questions) => {
    return questions.map(question => {
    question.question = cleanEncoding(question.question)
    question.correct_answer = cleanEncoding(question.correct_answer)
    question.incorrect_answers = question.incorrect_answers.map(answer => cleanEncoding(answer))
    return question
    })
}