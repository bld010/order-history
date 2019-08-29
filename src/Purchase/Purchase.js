import React from 'react';
import './Purchase.css';

const Purchase = ({purchase}) => {
  return(
    <article className="Purchase">
      <div className="left">
        <img src={purchase.img}></img>
      </div>
      <div className="center">
        <h3>{purchase.name}</h3>
        <p>{purchase.description}</p>
      </div>
      <div className="right">
        <h3>{purchase.price}</h3>
        <button>Remove From History</button>
      </div>
    </article>
  )
} 

export default Purchase;