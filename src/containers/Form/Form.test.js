import React from 'react';
import { Form, mapDispatchToProps } from './Form';
import { shallow } from 'enzyme';
import { fetchQuestions } from '../../util/apiCalls';
import * as actions from '../../actions';

jest.mock('../../util/apiCalls');
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

fetchQuestions.mockImplementation(() => 
  Promise.resolve(mockQuestions)
  )

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

actions.setQuestions = jest.fn()

describe('Form', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Form setTeams={actions.setTeams} setHaveQuestions={actions.setHaveQuestions} setQuestions={actions.setQuestions}/>
    )
  })
  it('should match the initial snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  describe('handleChange', () => {
    it('should update the state when team One types in their name', () => {
      const mockEvent = { target: { id: 'teamOne', value: 'Lez Quizzerable' } };
      expect(wrapper.state('teamOne')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('teamOne')).toEqual(mockEvent.target.value)
    })
    it('should update the state when team Two types in their name', () => {
      const mockEvent = { target: { id: 'teamTwo', value: "Let's Get Quizzacle" } };
      expect(wrapper.state('teamTwo')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('teamTwo')).toEqual(mockEvent.target.value)
    })
    it('should update the state when the user types in an amount', () => {
      const mockEvent = { target: { id: 'amount', value: '5'} };
      expect(wrapper.state('amount')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('amount')).toEqual(mockEvent.target.value)
    })
    it('should update the state when the user selects a category', () => {
      const mockEvent = { target: { id: 'category', value: '11' } };
      expect(wrapper.state('category')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('category')).toEqual(mockEvent.target.value)
    })
    it('should update the state when the user selects their difficulty', () => {
      const mockEvent = { target: { id: 'difficulty', value: 'medium' } };
      expect(wrapper.state('difficulty')).toEqual('');
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('difficulty')).toEqual(mockEvent.target.value)
    })
    it('should run handleChange when the inputs detect a change', () => {
      const mockTeamOneEvent = { target: { id: 'teamOne', value: 'Robbie' } };
      const mockTeamTwoEvent = { target: { id: 'teamTwo', value: 'Travis' } };
      wrapper.instance().handleChange = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.find('#teamOne').simulate('change', mockTeamOneEvent);
      wrapper.find('#teamTwo').simulate('change', mockTeamTwoEvent);
      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockTeamOneEvent);
      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockTeamTwoEvent);
    }) 
  })
  describe('handleSubmit', () => {
    it('should prevent the default action', () => {
      const mockEvent = {
        preventDefault: jest.fn()
      }
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalled()
    })
    it('should call handleQuestions', () => {
      const mockEvent = {
        preventDefault: jest.fn()
      }
      wrapper.instance().handleQuestions = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.instance().handleQuestions).toHaveBeenCalled()
    })
    it('should call handleTeamns', () => {
      const mockEvent = {
        preventDefault: jest.fn()
      }
      wrapper.instance().handleTeams = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.instance().handleTeams).toHaveBeenCalled()
    })
    it('should call handleSubmit when the form is submitted', () => {
      const mockEvent = { preventDefault: jest.fn() };
      wrapper.instance().handleSubmit = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.find('form').simulate('submit', mockEvent);
      expect(wrapper.instance().handleSubmit).toHaveBeenCalledWith(mockEvent)
    })
  })
  describe('handleTeams', () => {
    it('should call setTeams', () => {
      wrapper.instance().setState({ teamOne: 'Lez Quizzerable', teamTwo: "Let's Get Quizzacle"})
      wrapper.instance().handleTeams();
      expect(actions.setTeams).toHaveBeenCalledWith(mockTeams)
    })
  })
  describe('handleQuestions', () => {
    it('should call fetchQuestions', () => {
      wrapper.instance().handleQuestions();
      expect(fetchQuestions).toHaveBeenCalled()
    })
    it('should call setQuestions with he correct questions', () => {
      wrapper.instance().handleQuestions()
      expect(actions.setQuestions).toHaveBeenCalledWith(mockQuestions)
    })
    it('should call setHaveQuestions', () => {
      wrapper.instance().handleQuestions()
      expect(actions.setHaveQuestions).toHaveBeenCalled()
    })
  })
  describe('mapDispatchToProps', () => {
    it('should call Dispatch with setTeams actions when setTeams is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.setTeams('SET_TEAMS', mockTeams)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setTeams('SET_TEAMS', mockTeams)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
    it('should call Dispatch with setQuestions actions when setQuestions is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.setQuestions('SET_QUESTIONS', mockQuestions)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setQuestions('SET_QUESTIONS', mockQuestions)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
    it('should call Dispatch with setHaveQuestions actions when setHaveQuestions is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = actions.setHaveQuestions('SET_HAVE_QUESTIONS')
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setHaveQuestions('SET_HAVE_QUESTIONS')
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})