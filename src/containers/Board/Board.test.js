import React from 'react';
import { Board, mapDispatchToProps, mapStateToProps } from './Board';
import { shallow } from 'enzyme';
import * as actions from '../../actions';
import * as helpers from '../../util/helperFuncs';

jest.mock('../../util/helperFuncs')

jest.mock('../../actions')
let mockQuestions = [{
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
const mockCurrentQuestion = {
  "category": "Politics",
  "type": "boolean",
  "difficulty": "easy",
  "question": "There was a satirical candidate named &quot;Deez Nuts&quot; running in the 2016 US presidential elections.",
  "correct_answer": "True",
  "incorrect_answers": [
    "False"
  ]
}

const mockTeams = [{
  name: 'Lez Quizzerable',
  score: 0
}, {
  name: "Let's Get Quizzacle",
  score: 0
}]

actions.setTeams = jest.fn().mockImplementation(() => {
  return mockTeams
})

actions.setHaveQuestions = jest.fn()

actions.setQuestions = jest.fn().mockImplementation(() => mockQuestions)

actions.setCurrentQuestion = jest.fn().mockImplementation(() => mockCurrentQuestion)

helpers.determineCurrentTeam.mockImplementation(() => 0)

describe('Board', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Board setQuestions={actions.setQuestions} setCurrentQuestion={actions.setCurrentQuestion}
      increaseTurnCount={actions.increaseTurnCount}
      setCurrentTeam={actions.setCurrentTeam}
      updateScore={actions.updateScore}
      setHaveWinner={actions.setHaveWinner}
      questions={mockQuestions}
      teams={mockTeams}
      currentQuestion={mockCurrentQuestion}
      turnCount={0}
      currentTeam={mockTeams[0]}
      />
    )
  })
  it('should match the initial snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  describe('Board componentDidMount',() => {
    it('should call increaseTurnCount after mounting', () => {
      expect(actions.increaseTurnCount).toHaveBeenCalled()
    })
    it('should call updateCurrentQuestion after mounting', () => {
      wrapper.instance().updateCurrentQuestion = jest.fn()
      wrapper.instance().forceUpdate()
      wrapper.instance().componentDidMount()
      expect(wrapper.instance().updateCurrentQuestion).toHaveBeenCalled()
    })
    it('should call determineCurrentTeam after mounting', () => {
      expect(helpers.determineCurrentTeam).toHaveBeenCalled()
    })
    it('should call setCurrentTeam after mounting', () => {
      expect(actions.setCurrentTeam).toHaveBeenCalledWith(mockTeams[0])
    })
  })
})