import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

export default App;
