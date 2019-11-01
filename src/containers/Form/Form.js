import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Form.scss';

class Form extends Component {
  constructor() {
    super() 
    this.state = {
      teamOne:'',
      teamTwo: '',
      amount: null,
      category: null,
      difficulty: null
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id]:e.target.value})
  }
  render() {
    const { teamOne, amount, category, difficulty, teamTwo } = this.state;
    return (
      <form>
        <div className="team1-div">
          <label className="team-label" htmlFor="name-team1">Team 1 Name</label>
          <input type="text" id="teamOne" maxLength="20" value={teamOne}
          onChange={this.handleChange} placeholder="Team 1 name" required />
        </div>
        <div className="selection-div">
          <h1>Welcome to It's not <span>small</span> it's <span>Trivial</span>!</h1>
          <label htmlFor="amount">Choose the number of rounds (up to 10)</label>
          <input type="number" id="amount" min="1" max="10" value={amount}
          placeholder="number of rouns" onChange={this.handleChange} required/>
          <label htmlFor="category">Select a category</label>
          <select value={category}
            onChange={this.handleChange} id="category">
            <option value="9" defaultValue>General Knowledge</option>
            <option value="11">Movies</option>
            <option value="13">Musicals/Theatre</option>
            <option value="20">Mythology</option>
            <option value="23">History</option>
            <option value="17">Science & Nature</option>
          </select>
          <label htmlFor="category">Select the difficulty</label>
          <select value={difficulty}
            onChange={this.handleChange} id="difficulty">
            <option value="" defaultValue>Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button className="play-button" type="submit">Play!</button>
        </div>
        <div className="team2-div">
          <label htmlFor="name-team1">Team 1 Name</label>
          <input type="text" id="teamTwo" maxLength="20" 
          onChange={this.handleChange} value={teamTwo}
          placeholder="Team 2 name" required />
        </div>
      </form>
    )
  }
}

export default Form;