import React from 'react';
import {shuffle} from '../util/helperFuncs';

const Answers = ({answers}) => {
  const shuffledAnswers = shuffle(answers).map((answer, i) => 
    <button key={i} type="button" className="answer">{answer}</button>
    )
  return (
    <section className="answers">
      {shuffledAnswers}
    </section>
  )
}

export default Answers