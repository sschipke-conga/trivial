import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import loadingImg from '../../images/loadingGIF.gif'


//components
import Form from '../Form/Form';
import Board from '../Board/Board';
import EndGame from '../../components/EndGame/EndGame'
import './App.scss';

export const App = ({ teams, questions, haveWinner, haveQuestions }) => {
  return (
    <div className="app">
      <Route exact path="/" render={ (props) => <Form {...props} />} />
      {teams.length && !haveQuestions && 
      <div className="loading-div">
      <img className="loading-image" src={loadingImg} alt="loading: three circles"/>
      </div>
      }
      {haveQuestions && <Route path="/questions/" render={(props) => <Board {...props} />} />}
      {haveWinner&& <Route path="/winner/" render={(props) => <EndGame {...props} />}/>}
    </div>
  )}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  questions: state.questions,
  currentQuestion: state.currentQuestion,
  haveWinner: state.haveWinner,
  haveQuestions: state.haveQuestions,
})

export default connect(mapStateToProps)(App);

App.propTypes = {
  teams: PropTypes.array,
  questions: PropTypes.array,
  currentQuestion: PropTypes.object,
  haveWinner: PropTypes.bool,
  haveQuestions: PropTypes.bool
}