import { combineReducers } from 'redux';
import questions from './questions';
import currentQuestion from './currentQuestion';
import currentTeam from './currentTeam'
import teams from './teams';
import turnCount from './turnCount';
import haveWinner from './haveWinner';
import haveQuestions from './haveQuestions'

const rootReducer = combineReducers({
  questions,
  currentQuestion,
  currentTeam,
  teams,
  turnCount,
  haveWinner,
  haveQuestions
});

export default rootReducer;