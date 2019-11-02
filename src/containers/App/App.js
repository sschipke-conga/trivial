import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


//components
import Form from '../Form/Form';
import Board from '../Board/Board'
import './App.scss';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    const {teams,questions, haveWinner} = this.props
  return (
    <div className="app">
      {!questions.length && !teams.length && <Route exact path='/' render={(props) => <Form {...props} />} />}
      {questions.length  && !haveWinner && <Route path='/' render={(props) => <Board {...props} />} />}
      {haveWinner && <h1>Winner</h1>}
    </div>
  )}
}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  questions: state.questions,
  currentQuestion: state.currentQuestion,
  haveWinner: state.haveWinner
})

export default connect(mapStateToProps)(App);