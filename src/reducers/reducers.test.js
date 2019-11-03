import currentQuestion from './currentQuestion';
import currentTeam from './currentTeam';
import haveQuestions from './haveQuestions';
import haveWinner from './haveWinner';
import questions from './questions';

describe('currentQuestion reducer', () => {
  it('should return the initial state of NULL', () => {
    const expected = null;
    const result = currentQuestion(undefined, {});
    expect(result).toEqual(expected);
  })
  it('should return state with a current question', () => {
    const mockCurrentQuestion = {
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
    }
    const mockAction = {
      type: 'SET_CURRENT_QUESTION',
      currentQuestion: mockCurrentQuestion
    }
    const result = currentQuestion(null,mockAction);
    expect(result).toEqual(mockCurrentQuestion)
  })
  it('should reset the state',  () => {
    const mockCurrentQuestion = {
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
    }
    const mockAction = {
      type: 'SET_CURRENT_QUESTION',
      currentQuestion: mockCurrentQuestion
    }
    const mockReset = {
      type: 'RESET_CURRENT_QUESTION'
    }
    const updatedState = currentQuestion(null, mockAction);
    expect(updatedState).toEqual(mockCurrentQuestion)
    const reset = currentQuestion(mockCurrentQuestion, mockReset);
    expect(reset).toEqual(null)
    
  })
})

describe('currentTeam reducer', () => {
  it('should set the initial state of null', () => {
    const expected = null;
    const result = currentTeam(undefined, {});
    expect(result).toEqual(expected);
  });
  it('should set the state with the current team', () => {
    const mockTeam = {
      name: "Let's Get Quizzacle",
      score: 0
    };
    const mockAction = {
      type: 'SET_CURRENT_TEAM',
      team: mockTeam
    }
    expect(currentTeam(null, mockAction)).toEqual(mockTeam)
  });
})

describe('haveQuestions reducer', () => {
  it('should set the initial state as false', () => {
    expect(haveQuestions(undefined, {})).toEqual(false)
  })
  it('should set the state to true when "HAVE_QUESTIONS" is the type of the action',() => {
    const mockAction = {
      type: 'HAVE_QUESTIONS'
    }
    expect(haveQuestions(false, mockAction)).toEqual(true)
  })
})

describe('haveWinner reducer', () => {
  it('should set the initial state as false', () => {
    expect(haveWinner(undefined, {})).toEqual(false)
  })
  it('should set the state to true when "WINNER" is the type of the action', () => {
    const mockAction = {
      type: 'WINNER'
    }
    expect(haveWinner(false, mockAction)).toEqual(true)
  })
})

describe('questions reducers', () => {
  it('should return the initial state', () => {
    expect(questions(undefined, {})).toEqual([])
  })
  it('should return state with questions', () => {
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
      }];
      const mockAction = {
        type: 'SET_QUESTIONS',
        questions: mockQuestions
      }
      expect(questions(undefined, mockAction)).toEqual(mockQuestions)
  })
})