import React from 'react';
import './PurchasesContainer.css';
import Purchase from '../Purchase/Purchase';

const PurchasesContainer = ({purchases}) =>  {


  let purchaseList = purchases.map(purchase => {
    return <Purchase key={purchase.id} purchase={purchase} />
  })

  return(
    <>
    {purchaseList}
    </>
  )
}

export default PurchasesContainer; 