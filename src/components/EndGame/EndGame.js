import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {determineWinner} from '../../util/helperFuncs';
import './EndGame.scss'

export const EndGame = ({teams, turnCount}) => {
  const winningTeam = determineWinner(teams)

  return(
    <section className="end-game-section">
      <h1 className="congrats">Congratulations!</h1>
    { winningTeam && <div className="ende-game-div">
    <h2 className="winning-team">{winningTeam.name} you win!</h2>
    <p className="winning-questions">You answered {winningTeam.score} questions correctly!</p>
    </div>}
    {!winningTeam && <h2>It's a tie! You both win!</h2>}

    </section>
  )
}

export const mapStateToProps = state => ({
  teams: state.teams,
  turnCount: state.turnCount
})

export default connect(mapStateToProps)(EndGame);

EndGame.propTypes = {
  teams: PropTypes.array.isRequired,
  turnCount: PropTypes.number
}