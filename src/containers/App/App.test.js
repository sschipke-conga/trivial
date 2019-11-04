import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import {App, mapStateToProps} from './App';

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

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App
      questions={mockQuestions}
      haveWinner={false}
      haveQuestions={true}
      teams={mockTeams}
      />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('mapStateToProps gives all the questions, teams, and turnCount in state', () => {
    const mockState = {
      questions: mockQuestions,
      currentQuestion: mockCurrentQuestion,
      teams: mockTeams,
      haveQuestions: true,
      haveWinner: false
    };
    const expected = {
      questions: mockState.questions,
      teams: mockState.teams,
      currentQuestion: mockState.currentQuestion,
      haveQuestions: true,
      haveWinner: false
    };
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})

describe('App and EndGame', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App
      haveWinner={true}
      teams={mockTeams}
      questions={[]}
      haveQuestions={true}
    />)
  })
  it('should render the EndGame component if there is a winner', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('App and Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App
      haveWinner={false}
      teams={[]}
      questions={[]}
      haveQuestions={false}
    />)
  })
  it('should render the Form component if there are no teams and no questions', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

describe('App and loading image', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App
      haveWinner={false}
      teams={['a', 'b']}
      questions={[]}
      haveQuestions={false}
    />)
  })
  it('should render the loading image if there are teams but no questions', () => {
    expect(wrapper).toMatchSnapshot()
  })
})