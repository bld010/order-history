import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Date.now(),
      img: '',
      name: '',
      description: '',
      price: null
    }
  }

  handleFormInputs = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    return(
      <form className="Form">
        <input 
          name='img'
          type='text'
          onChange={this.handleFormInputs}
          placeholder='Image url:'
          value={this.state.img}
        />
        <input 
          name='name'
          type='text'
          onChange={this.handleFormInputs}
          placeholder='Name:'
          value={this.state.name}
        />
         <input 
          name='description'
          type='text'
          onChange={this.handleFormInputs}
          placeholder='Description:'
          value={this.state.description}
        />
         <input 
          name='price'
          type='number'
          onChange={this.handleFormInputs}
          placeholder='Price: '
          value={this.state.price}
        />
        <button onClick={(e) => this.props.addNewPurchase(e, this.state)}>
          Add Purchase
        </button>
      </form>
    )
  }
}



export default Form;