import React from 'react';
import { shallow } from 'enzyme';
import { shuffle } from '../../util/helperFuncs';
import Answers from './Answers';

jest.mock('../../util/helperFuncs')

const mockAnswers = ['c', 'b', 'd', 'a']

shuffle.mockImplementation(() => ['b', 'd', 'a', 'c'])

describe('Answers', () => {
  let wrapper;
  const mockSubmitAnswer = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Answers 
    answers={mockAnswers}
    submitAnswer={mockSubmitAnswer}
    />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should call shuffle when mounted', () => {
    expect(shuffle).toHaveBeenCalledWith(mockAnswers)
  })
})