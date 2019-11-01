import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setCurrentQuestion, setQuestions, increaseTurnCount} from '../../actions/index';
export class Board extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const {increaseTurnCount} = this.props
    this.updateCurrentQuestion()
    increaseTurnCount();
  }

  updateCurrentQuestion = () => {
    const {questions, currentQuestion, setCurrentQuestion, setQuestions} = this.props;
    const selectedCurrentQuestion = questions.pop();
    setQuestions(questions);
    setCurrentQuestion(selectedCurrentQuestion);


  }

  render() {
    const {teams, currentQuestion} = this.props
    return (
      <div className="board">
        <div className="board-team-one">
          <h1 className="team-one-name">{teams[0].name}</h1>
          <h3 className="score">{teams[0].score}</h3>
        </div>
        <div className="questions-div">
          <h3>
          Current question
          </h3>
        </div>
        <div className="board-team-two">
          <h1 className="team-one-name">{teams[1].name}</h1>
          <h3 className="score">{teams[1].score}</h3>
        </div>
      </div>
    )
  } 
}

export const mapStateToProps = state => ({
  questions: state.questions,
  teams: state.teams,
  currentQuestion: state.currentQuestion
})

export const mapDispatchToProps = dispatch => bindActionCreators({setQuestions, setCurrentQuestion, increaseTurnCount}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)