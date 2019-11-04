import React from 'react';
import * as helperFuncs from './helperFuncs';



describe('determineCurrentTeam', () => {
  it('should determine the current team based on the turnCount by returning 1 or 2', () => {
    expect(helperFuncs.determineCurrentTeam(2)).toEqual(1)
    expect(helperFuncs.determineCurrentTeam(1)).toEqual(0)
    expect(helperFuncs.determineCurrentTeam(6)).toEqual(1)
    expect(helperFuncs.determineCurrentTeam(7)).toEqual(0)
  })
})

describe('determineWinners', () => {
  const mockTeams = [{
    name: 'Lez Quizzerable',
    score: 0
  }, {
    name: "Let's Get Quizzacle",
    score: 2
  }]
  const expected = {
    name: "Let's Get Quizzacle",
    score: 2
  }
  it('should determine the winner based on the team scores', () => {
    expect(helperFuncs.determineWinner(mockTeams)).toEqual(expected)
  })
  it('should return false if there is a tie', () => {
    const tiedTeams = [{
      name: 'Lez Quizzerable',
      score: 2
    }, {
      name: "Let's Get Quizzacle",
      score: 2
    }]
    expect(helperFuncs.determineWinner(tiedTeams)).toEqual(false)
  })
})

describe('capDifficulty', () => {
  const mockDiff = 'medium';
  it('shoult capitalize the first letter of a string', () => {
    expect(helperFuncs.capDifficulty(mockDiff)).toEqual('Medium')
  })
})


describe('cleanEncoding', () => {
  const mockString = 'David&#039;s book &quot;Henry &amp; Pok&eacutemon&quot; is one of the best';
  const expected = `David's book "Henry & Pokémon" is one of the best`;
  it('should clean a string of data', () => {
    expect(helperFuncs.cleanEncoding(mockString)).toEqual(expected)
  })
})

describe('cleanQuestions', () => {
  const mockQuestions = [{
    "category": "Entertainment: Film",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What breed of dog was Marley in the film &quot;Marley &amp; Me&quot; (2008)?",
    "correct_answer": "Labrador Retriever",
    "incorrect_answers": [
      "Golden Retriever",
      "Dalmatian",
      "Shiba Inu"
    ]
  }, {
      "category": "Entertainment: Film",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Who starred as Bruce Wayne and Batman in Tim Burton&#039;s 1989 movie &quot;Batman&quot;?",
      "correct_answer": "Michael Keaton",
      "incorrect_answers": [
        "George Clooney",
        "Val Kilmer",
        "Adam West"
      ]
    }]
  const cleanedQuestions = [
    {
  "category": "Entertainment: Film",
      "correct_answer": "Labrador Retriever",
      "difficulty": "easy",
      "incorrect_answers": [
        "Golden Retriever",
        "Dalmatian",
        "Shiba Inu",
      ],
      "question": "What breed of dog was Marley in the film \"Marley & Me\" (2008)?",
      "type": "multiple",
    },
  {
  "category": "Entertainment: Film",
    "correct_answer": "Michael Keaton",
    "difficulty": "easy",
    "incorrect_answers": [
      "George Clooney",
      "Val Kilmer",
      "Adam West",
    ],
    "question": "Who starred as Bruce Wayne and Batman in Tim Burton's 1989 movie \"Batman\"?",
    "type": "multiple",
  },
]
  it('should clean the questions', () => {
    expect(helperFuncs.cleanQuestions(mockQuestions)).toEqual(cleanedQuestions)
  })
})