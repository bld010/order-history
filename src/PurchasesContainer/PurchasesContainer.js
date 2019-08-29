import React from 'react';
import './PurchasesContainer.css';
import Purchase from '../Purchase/Purchase';

const PurchasesContainer = ({purchases}) =>  {


  let purchaseList = purchases.map(purchase => {
    return <Purchase purchase={purchase} />
  })

  return(
    <p>{purchaseList}</p>
  )
}

export default PurchasesContainer; 