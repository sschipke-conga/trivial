export const shuffle = answers => {
  var m = answers.length, t, i;
  console.log(m)
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