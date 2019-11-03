import currentQuestion from './currentQuestion';

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