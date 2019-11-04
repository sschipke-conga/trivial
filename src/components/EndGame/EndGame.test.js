import React from 'react';
import { shallow } from 'enzyme';
import {determineWinner} from '../../util/helperFuncs';
import {EndGame, mapStateToProps } from './EndGame';

jest.mock('../../util/helperFuncs')

const mockTeams = [{
  name: 'Lez Quizzerable',
  score: 2
}, {
  name: "Let's Get Quizzacle",
  score: 0
}]

describe('EndGame', () => {
  determineWinner.mockImplementation(() => mockTeams[0])
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<EndGame 
    teams={mockTeams}
    />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should call determineWinner', () => {
    expect(determineWinner).toHaveBeenCalledWith(mockTeams)
  })
  it('mapStateToProps gives all the teams to state', () => {
    const mockState = {
      teams: mockTeams
    };
    const expected = {
      teams: mockState.teams
    };
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps).toEqual(expected)
  })
})

describe('EndGame with ties', () => {
  const mockTieTeams = [{
    name: 'Lez Quizzerable',
    score: 2
  }, {
    name: "Let's Get Quizzacle",
    score: 2
  }]
  let wrapper;
  determineWinner.mockImplementation(() => false)
  beforeEach(() => {
    wrapper = shallow(<EndGame
      teams={mockTieTeams}
    />)
  })
  it('should match the snapshot if there is no winner (a tie)', () => {
    expect(wrapper).toMatchSnapshot()
  })
})