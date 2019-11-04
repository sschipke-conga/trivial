import React from 'react';
import { Board, mapDispatchToProps, mapStateToProps } from './Board';
import { shallow } from 'enzyme';
import * as actions from '../../actions';
import * as helpers from '../../util/helperFuncs';

jest.mock('../../util/helperFuncs')

jest.mock('../../actions')
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

describe('updateCurrentQuestion', () => {
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
  it('should remove a question from the questions array', () => {
    expect(wrapper.instance().props.questions.length).toEqual(2)
    wrapper.instance().updateCurrentQuestion()
    expect(wrapper.instance().props.questions.length).toEqual(1)
  })
  it('should call setQuestions', () => {
    wrapper.instance().updateCurrentQuestion()
    expect(actions.setQuestions).toHaveBeenCalledWith(mockQuestions)
  })
  it('should call setCurrentQuestion', () => {
    wrapper.instance().updateCurrentQuestion()
    expect(actions.setCurrentQuestion).toHaveBeenCalledWith(mockCurrentQuestion)
  })
})

describe('submitAnswer', () => {
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
    }, {
      "category": "Sports",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What team won the 2016 MLS Cup?",
      "correct_answer": "Seattle Sounders",
      "incorrect_answers": [
        "Colorado Rapids",
        "Toronto FC",
        "Montreal Impact"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What was the first ever London Underground line to be built?",
      "correct_answer": "Metropolitan Line",
      "incorrect_answers": [
        "Circle Line",
        "Bakerloo Line",
        "Victoria Line"
      ]
    }]
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

  it('should call updateCurrentQuestion', () => {
    const mockEvent = { target: { name: 'mock' } }
    wrapper.instance().updateCurrentQuestion = jest.fn()
    wrapper.instance().forceUpdate();
    wrapper.instance().submitAnswer(mockEvent)
    expect(wrapper.instance().updateCurrentQuestion).toHaveBeenCalled()
  })
  it('call increaseTurnCount', () => {
    const mockEvent = {target: {name:'mock'}}
    wrapper.instance().submitAnswer(mockEvent)
    expect(actions.increaseTurnCount).toHaveBeenCalled()
  })
  it('should call determineCurrentTeam', () => {
    const mockEvent = {target: {name: 'Deb'}}
    wrapper.instance().submitAnswer(mockEvent)
    expect(helpers.determineCurrentTeam).toHaveBeenCalled()
  })
  it('should call setCurrentTeam', () => {
    const mockEvent = { target: { name: 'Deb' } }
    wrapper.instance().submitAnswer(mockEvent)
    expect(actions.setCurrentTeam).toHaveBeenCalledWith(mockTeams[0])
  })
  it('if the answer is correct it should call updateScore', () => {
    const mockEvent = {target: {name: 'Putney'}}
    wrapper.instance().submitAnswer(mockEvent)
    expect(actions.increaseTurnCount).toHaveBeenCalled()
  })
  it('should update the score if the answer is correct', () => {
    const mockEvent = { target: { name: 'Putney' } }
    expect(wrapper.instance().props.currentTeam.score).toEqual(1)
    wrapper.instance().submitAnswer(mockEvent)
    expect(wrapper.instance().props.currentTeam.score).toEqual(2)
  })
  it('should NOT update the score if the answer is wrong', () => {
    const mockEvent = { target: { name: 'Debra' } }
    expect(wrapper.instance().props.currentTeam.score).toEqual(2)
    wrapper.instance().submitAnswer(mockEvent)
    expect(wrapper.instance().props.currentTeam.score).toEqual(2)
  })
  it('if there are no questions left it should call setHaveWinner', () => {
    const mockEvent = { target: { name: 'Debra' } }
    wrapper.instance().submitAnswer(mockEvent)
    expect(actions.setHaveWinner).toHaveBeenCalled()
  })
  it('if there are no questions left it should return null', () => {
    const mockEvent = { target: { name: 'Debra' } }
    expect(wrapper.instance().submitAnswer(mockEvent)).toEqual(null)
  })
})

describe('mapDispatchToProps and mapStateToProps', () => {
  it('should call Dispatch with setQuestions actions when setQuestions is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.setQuestions('SET_QUESTIONS', mockQuestions)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setQuestions('SET_QUESTIONS', mockQuestions)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should call Dispatch with setCurrnetQuestion actions when setCurrentQuestion is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.setCurrentQuestion('SET_CURRENT_QUESTION', mockCurrentQuestion)
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setCurrentQuestion('SET_QUESTIONS', mockCurrentQuestion)
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should call Dispatch with increaseTurnCount actions when increaseTurnCount is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.increaseTurnCount('INCREASE_TURN_COUNT')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.increaseTurnCount('INCREASE_TURN_COUNT')
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should call Dispatch with setCurrentTeam actions when setCurrentTeam is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.setCurrentTeam('SET_CURRENT_TEAM')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setCurrentTeam('SET_CURRENT_TEAM', mockTeams[0])
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should call Dispatch with updateScore actions when updateScore is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.updateScore('UPDATE_SCORE')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.updateScore('UPDATE_SCORE')
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('should call Dispatch with setHaveWinner actions when setHaveWinner is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.setHaveWinner('WINNER')
    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.setHaveWinner('WINNER')
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
  it('mapStateToProps gives all the questions, teams, and turnCount in state', () => {
    const mockState = {
      questions: mockQuestions,
      currentQuestion: mockCurrentQuestion,
      teams: mockTeams,
      turnCount: 1,
      currentTeam: mockTeams[0]
    };
    const expected = {
      questions: mockState.questions,
      teams: mockState.teams,
      currentQuestion: mockState.currentQuestion,
      turnCount: mockState.turnCount,
      currentTeam: mockState.currentTeam
    };
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})
