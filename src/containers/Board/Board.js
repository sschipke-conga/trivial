import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import {determineCurrentTeam, capDifficulty} from '../../util/helperFuncs';
import {setCurrentQuestion, setQuestions, increaseTurnCount, setCurrentTeam, updateScore, setHaveWinner} from '../../actions/index';
import Answers from '../../components/Answers/Answers';
import './Board.scss';
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
    const {questions, setCurrentQuestion, setQuestions} = this.props;
    const selectedCurrentQuestion = questions.pop();
    setQuestions(questions);
    setCurrentQuestion(selectedCurrentQuestion);
  }

  submitAnswer = (e) => {
    let {currentQuestion, increaseTurnCount, currentTeam, setCurrentTeam, teams, turnCount, updateScore, questions, setHaveWinner} = this.props
    if (e.target.name === currentQuestion.correct_answer) {
      currentTeam.score++
      updateScore()
    }
    if (!questions.length) {
      setHaveWinner()
      return null;
    }
    increaseTurnCount()
    this.updateCurrentQuestion()
    let newTurnCount = turnCount + 1
    currentTeam = teams[determineCurrentTeam(newTurnCount)];
    setCurrentTeam(currentTeam)
  }

  render() {
    const {teams, currentQuestion, currentTeam, questions, haveWinner} = this.props
    if(haveWinner) {
      return <Redirect to="/winner/" />
    }
    return (
      <div className="board">
        <div className="board-team-one">
          <h1 className="team-one-name">{teams[0].name}</h1>
          <h3 className="score">Score: {teams[0].score}</h3>
        </div>
        <div className="question-div">
          {currentQuestion && <div className="question-header-div">
            <div className="question-headers">
              <h3 className="category">{currentQuestion.category}</h3>
              <h3 className="difficulty">{capDifficulty(currentQuestion.difficulty)}</h3>
            </div>
            <h2 className="question">{currentQuestion.question}</h2>
            <div className="answers-div"><Answers submitAnswer={this.submitAnswer} answers={[currentQuestion.correct_answer, ...currentQuestion.incorrect_answers]}/>
            <h4><span className="current-team">{currentTeam.name}</span>, your turn!</h4>
            {questions.length !== 0 && <h5>{questions.length+1} questions left</h5>}
            {questions.length === 0 && <h5>Last question!</h5>}

            </div>
          </div>}
        </div>
        <div className="board-team-two">
          <h1 className="team-one-name">{teams[1].name}</h1>
          <h3 className="score">Score: {teams[1].score}</h3>
        </div>
      </div>
    )
  } 
}

export const mapStateToProps = state => ({
  questions: state.questions,
  teams: state.teams,
  currentQuestion: state.currentQuestion,
  turnCount: state.turnCount,
  currentTeam: state.currentTeam,
  haveWinner: state.haveWinner
})

export const mapDispatchToProps = dispatch => bindActionCreators({setQuestions, setCurrentQuestion, increaseTurnCount, setCurrentTeam, updateScore, setHaveWinner}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Board)

Board.propTypes = {
  setQuestions: PropTypes.func,
  increaseTurnCount: PropTypes.func,
  setCurrentTeam: PropTypes.func,
  setCurrentQuestion: PropTypes.func,
  updateScore: PropTypes.func,
  setHaveWinner: PropTypes.func,
  teams: PropTypes.array,
  questions: PropTypes.array,
  currentQuestion: PropTypes.object,
  turnCount: PropTypes.number,
  currentTeam: PropTypes.object
}