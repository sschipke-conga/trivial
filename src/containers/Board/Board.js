import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {determineCurrentTeam} from '../../util/helperFuncs'
import {setCurrentQuestion, setQuestions, increaseTurnCount, setCurrentTeam} from '../../actions/index';
import './Board.scss'
export class Board extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const {increaseTurnCount, turnCount, teams, setCurrentTeam} = this.props
    increaseTurnCount();
    this.updateCurrentQuestion()
    let newTurnCount = turnCount + 1
    const currentTeam = teams[determineCurrentTeam(newTurnCount)];
    setCurrentTeam(currentTeam)
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
        <div className="question-div">
          {currentQuestion&&<div className="question-header-div">
            <h3 className="category">{currentQuestion.category}</h3>
            <h2 className="question">{currentQuestion.question}</h2>
            <h3 className="difficulty">{currentQuestion.difficulty}</h3>
          </div>}
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
  currentQuestion: state.currentQuestion,
  turnCount: state.turnCount
})

export const mapDispatchToProps = dispatch => bindActionCreators({setQuestions, setCurrentQuestion, increaseTurnCount, setCurrentTeam}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)