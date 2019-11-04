import {fetchQuestions} from './apiCalls';
import {cleanQuestions} from './helperFuncs';
jest.mock('./helperFuncs');

cleanQuestions.mockImplementation(() =>
  expectedQuestions
)
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

const expectedQuestions = [{
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

describe('fetchQuestions', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ results: mockQuestions })
      })
    })
  })
  it('should fetch with the correct URL', () => {
    let url = `https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple`;
    fetchQuestions(10, 11, 'medium');
    expect(window.fetch).toHaveBeenCalledWith(url)
  })
  it('should return an array of questions (HAPPY)', () => {
    expect(fetchQuestions(10, 11, 'medium')).resolves.toEqual(expectedQuestions);
  });
  it('should throw an error if something goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(fetchQuestions()).rejects.toEqual(Error('Failed to fetch'))
  });
  it('should call cleanQuestions when called', () => {
    fetchQuestions(10, 11, 'medium')
    expect(cleanQuestions).toHaveBeenCalled()
  })
})