import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


//components
import Form from '../Form/Form';
import Board from '../Board/Board';
import EndGame from '../../components/EndGame/EndGame'
import './App.scss';

export const App = ({ teams, questions, haveWinner, haveQuestions }) => {
  return (
    <div className="app">
      {!questions.length && !teams.length && <Route exact path='/' render={(props) => <Form {...props} />} />}
      {haveQuestions  && !haveWinner && <Route path='/' render={(props) => <Board {...props} />} />}
      {haveWinner && <EndGame />}
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