import React, { Component } from 'react';
import './App.css';
import PurchasesContainer from '../PurchasesContainer/PurchasesContainer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      purchases: []
    }
  }



  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/purchases')
      .then(resp => resp.json())
      .then(data => this.setState({purchases: data}))
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
            
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
