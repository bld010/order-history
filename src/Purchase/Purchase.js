import React from 'react';
import './Purchase.css';

const Purchase = ({purchase, deletePurchase}) => {
  return(
    <article className="Purchase">
      <div className="left">
        <img src={purchase.img} alt={purchase.name}></img>
      </div>
      <div className="center">
        <h3>{purchase.name}</h3>
        <p>{purchase.description}</p>
      </div>
      <div className="right">
        <h3>${purchase.price}</h3>
        <button onClick={(d) => deletePurchase(e, purchase.id)}>Remove From History</button>
      </div>
    </article>
  )
} 

export default Purchase;