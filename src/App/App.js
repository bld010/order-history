import React, { Component } from 'react';
import './App.css';
import PurchasesContainer from '../PurchasesContainer/PurchasesContainer';
import Form from '../Form/Form';

class App extends Component {

  constructor() {
    super();
    this.state = {
      purchases: []
    }
  }

  addNewPurchase = (e, newPurchase) => {
    e.preventDefault();
    this.setState({purchases: [...this.state.purchases, newPurchase]});
    this.postNewPurchase(newPurchase);
  }

  postNewPurchase = (newPurchase) => {
    const options={
      method: 'POST',
      body: JSON.stringify(newPurchase),
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    fetch('http://localhost:3001/api/v1/purchases', options)
      .then(resp => {
        if (!resp.ok) {
          throw Error('Error posting purchases');
        }
      })
      .catch(error => console.Error(error))
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/purchases')
      .then(resp => {
        if (!resp.ok) {
          throw Error('Error fetching purchases.');
        }
        return resp.json();
      })
      .then(data => this.setState({purchases: data}))
      .catch(error => console.Error('There was an error with the fetch.'))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            <Form addNewPurchase={this.addNewPurchase} />
          </div>
        </header>
        <div className='purchase-container'>
          <PurchasesContainer purchases={this.state.purchases} />
        </div>
      </div>
    );
  }
}

export default App;
