import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setTeams, setQuestions, setHaveQuestions} from '../../actions/index';
import {fetchQuestions} from '../../util/apiCalls';
import './Form.scss';

export class Form extends Component {
  constructor() {
    super() 
    this.state = {
      teamOne:'',
      teamTwo: '',
      amount: '',
      category: '',
      difficulty: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id]:e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    this.handleQuestions()
    this.handleTeams()
  }

  handleTeams = () => {
    const { teamOne, teamTwo } = this.state;
    const {setTeams} = this.props;
    const teams = [{
      name: teamOne,
      score: 0
    }, { name: teamTwo, score: 0 }]
    setTeams(teams)
  }

  handleQuestions = async () => {
    const {amount, category, difficulty} = this.state;
    const {setQuestions, setHaveQuestions} = this.props;
    let questions = await fetchQuestions((amount*2), category, difficulty);
    setQuestions(questions)
    setHaveQuestions()
  }

  render() {
    const { teamOne, amount, category, difficulty, teamTwo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="team1-div">
          <label className="team-label" htmlFor="name-team1">Team 1 Name</label>
          <input type="text" id="teamOne" maxLength="20" value={teamOne}
          onChange={this.handleChange} placeholder="Team 1 name" required />
        </div>
        <div className="selection-div">
          <h1>Welcome to It's not <span>small</span> it's <span>Trivial</span>!</h1>
          <label htmlFor="amount">Choose the number of rounds (up to 10)</label>
          <input type="number" id="amount" min="1" max="10" value={amount}
          placeholder="number of rounds" onChange={this.handleChange} required/>
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

export const mapDispatchToProps = (dispatch) => 
  bindActionCreators({setTeams, setQuestions, setHaveQuestions}, dispatch)

export default connect(null, mapDispatchToProps)(Form);

Form.propTypes = {
  setTeams: PropTypes.func
}