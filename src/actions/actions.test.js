import {
  setTeams, 
  setQuestions,
  setCurrentQuestion,
  increaseTurnCount,
  setCurrentTeam,
  updateScore,
  resetCurrentQuestion,
  setHaveQuestions,
  setHaveWinner
  } from './index';

describe('action creators', () => {
  it('setTeams should return the correct object', () => {
    const mockTeams = [
      {
        name: "Let's Get Quizzacle",
        score: 0
      }, {
        name: "Lez Quizzerable",
        score: 0
      }]
    const expected = {
      type: 'SET_TEAMS',
      teams: mockTeams
    }
    expect(setTeams(mockTeams)).toEqual(expected)
  })
  it('setQuestions should return the correct object', () => {
    const mockQuestions = [{
      "category": "Sports",
      "type": "multiple",
      "difficulty": "medium",
      "question": "At which bridge does the annual Oxford and Cambridge boat race start?",
      "correct_answer": "Putney",
      "incorrect_answers": [
        "Hammersmith",
        "Vauxhall ",
        "Battersea"
      ]
    },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Who is Sonic&#039;s sidekick?",
        "correct_answer": "Tails",
        "incorrect_answers": [
          "Shadow",
          "Amy",
          "Knuckles"
        ]
      },
      {
        "category": "Politics",
        "type": "boolean",
        "difficulty": "easy",
        "question": "There was a satirical candidate named &quot;Deez Nuts&quot; running in the 2016 US presidential elections.",
        "correct_answer": "True",
        "incorrect_answers": [
          "False"
        ]
      }]
    const expected = {
      type: 'SET_QUESTIONS',
      questions: mockQuestions
    }
    expect(setQuestions(mockQuestions)).toEqual(expected)
  })
  it('setCurrentQuestion should return the correct object', () => {
    const mockQuestion = {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who is Sonic&#039;s sidekick?",
      "correct_answer": "Tails",
      "incorrect_answers": [
        "Shadow",
        "Amy",
        "Knuckles"
      ]
    }
    const expected = {
      type: 'SET_CURRENT_QUESTION',
      currentQuestion: mockQuestion
    }
    expect(setCurrentQuestion(mockQuestion)).toEqual(expected)
  })
  it('increaseTurnCount should return the correct object', () => {
    const expected = {
      type: 'INCREASE_TURN_COUNT'
    }
    expect(increaseTurnCount()).toEqual(expected)
  })
  it('setCurrentTeam should return the correct object', () => {
    const team = {
      name: "Lez Quizzerable",
      score: 10
    }
    const expected = {
      type: 'SET_CURRENT_TEAM',
      team
    }
    expect(setCurrentTeam(team)).toEqual(expected)
  })
  it('updateScore should return the correct object', () => {
    const expected = {
      type: 'UPDATE_SCORE'
    }
    expect(updateScore()).toEqual(expected)
  })
  it('resetCurrentQuestion should return the correct object', () => {
    const expected = {
      type: 'RESET_CURRENT_QUESTION'
    }
    expect(resetCurrentQuestion()).toEqual(expected)
  })
  it('setHaveQuestions should return the correct object', () => {
    const expected = {
      type: 'HAVE_QUESTIONS'
    }
    expect(setHaveQuestions()).toEqual(expected)
  })
  it('setHaveWinner should return the correct object', () => {
    const expected = {
      type: 'WINNER'
    }
    expect(setHaveWinner()).toEqual(expected)
  })
})