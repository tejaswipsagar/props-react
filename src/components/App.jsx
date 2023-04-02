import React from 'react';
import Cards from './Cards';
import cards from '../card_details/CardDetails';
import '../../src/styles.css'

const App = () => {
  return (
    <div>
        <Cards name={cards[0].name} age={cards[0].age} tel={cards[0].tel} email={cards[0].email}img={cards[0].img}  />
        <Cards name={cards[1].name} age={cards[1].age} tel={cards[1].tel} email={cards[1].email}img={cards[1].img} />
        <Cards name={cards[2].name} age={cards[2].age} tel={cards[2].tel} email={cards[2].email}img={cards[2].img} />
        <Cards name={cards[3].name} age={cards[3].age} tel={cards[3].tel} email={cards[3].email}img={cards[3].img} />
    </div>
  )
};

export default App;