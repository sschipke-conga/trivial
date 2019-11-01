import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


//components
import Form from '../Form/Form'
import './App.scss';

class App extends Component {
  constructor() {
    super();
  }
  render() {
  return (
    <Form />
  )}
}

const mapStateToProps = (state) => ({
  teams: state.teams
})

export default connect(mapStateToProps)(App);