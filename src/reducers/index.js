import { combineReducers } from 'redux';
import questions from './questions';
import currentQuestion from './currentQuestion';
import currentTeam from './currentTeam'
import teams from './teams';
import turnCount from './turnCount'

const rootReducer = combineReducers({
  questions,
  currentQuestion,
  currentTeam,
  teams,
  turnCount
});

export default rootReducer;