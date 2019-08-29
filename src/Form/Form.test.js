import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {

  let wrapper = null;
  let mockAddNewPurchase = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form 
      addNewPurchase={mockAddNewPurchase}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state with change in inputs', () => {
    const mockEvent = {
      target: {
        name: 'name',
        value: 'iPhone X'
      }
    }

    wrapper.instance().handleFormInputs(mockEvent)
    wrapper.setState({id: 2})
    const expected = wrapper.state();

    expect(expected).toEqual({
      id: 2, 
      img: '',
      name: 'iPhone X',
      description: '',
      price: ''
    })
  })
})