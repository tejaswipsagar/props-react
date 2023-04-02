import React from 'react';
import Avatar from './Avatar';



const Cards = (props) => {
  return (
    <section id='cards-section'>
        <div className='main-cards-div container-fluid'>
            <div className="cards-div">
                 <div className="card" style={{width: "13rem"}}>
                  <Avatar img={props.img} />
                    <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.tel}</p>
                    <p>{props.email}</p>
                    </div>
                  </div>
            </div>
        </div>
    </section>
  )
};
export default Cards;