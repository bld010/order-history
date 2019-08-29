import React from 'react';
import { shallow } from 'enzyme';
import Purchase from './Purchase';

describe('Purchase', () => {

  let mockPurchase = { 
      id: 1, 
      name: 'iPhone', 
      description: 'Expensive phone',
      img: 'www.apple.com/iphone.bmp',
      price: 900
     }

  let wrapper = null;
  let mockDeletePurchase = jest.fn()

    beforeEach(() => {

    wrapper = shallow(<Purchase 
      deletePurchase={mockDeletePurchase}
      purchase={mockPurchase}/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should fire deletePurchase when button is clicked', () => {
    
    
    wrapper.find('button').simulate('click')

    expect(mockDeletePurchase).toHaveBeenCalled();
  })
})