import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
export class Board extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    const {teams} = this.props
    return (
      <div className="board">
        <div className="board-team-one">
          <h1>Test</h1>
          <h1 className="team-one-name">{teams[0].name}</h1>
        </div>
        
      </div>
    )
  } 
}

export const mapStateToProps = state => ({
  questions: state.questions,
  teams: state.teams
})

export default connect(mapStateToProps)(Board)