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


  it('should match the snapshot', () => {
    const wrapper = shallow(<Purchase purchase={mockPurchase}/>)
    expect(wrapper).toMatchSnapshot();
  })

  //button should fire deleteFromHistory prop
})