import React from 'react';
import {shuffle} from '../../util/helperFuncs';
import './Answers.scss';

const Answers = ({answers, submitAnswer}) => {
  const shuffledAnswers = shuffle(answers).map((answer, i) => 
    <button onClick={submitAnswer} key={i} name={answer} type="button" className="answer">{answer}</button>
    )
  return (
    <section className="answers">
      {shuffledAnswers}
    </section>
  )
}

export default Answers