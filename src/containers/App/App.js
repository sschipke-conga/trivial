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
    const {teams,questions} = this.props
  return (
    <div className="app">
      {questions.length === 0 ? <Route exact path='/' render={(props) => <Form {...props} />} /> : <Route exact path='/' render={(props) => <Board {...props} />} />}
    </div>
  )}
}

export const mapStateToProps = (state) => ({
  teams: state.teams,
  questions: state.questions
})

export default connect(mapStateToProps)(App);