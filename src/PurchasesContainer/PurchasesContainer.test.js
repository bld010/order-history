import React from 'react';
import { shallow } from 'enzyme'
import PurchasesContainer from './PurchasesContainer';

describe('PurchasesContainer', () => {
  it('should match the snapshot', () => {
    const mockPurchases = [
      { 
        id: 1, 
        name: 'iPhone', 
        description: 'Expensive phone',
        img: 'www.apple.com/iphone.bmp',
        price: 900
       },
        { 
        id: 1, 
        name: 'iPhone 12', 
        description: 'More Expensive phone',
        img: 'www.apple.com/iphone.bmp',
        price: 92300
       }
    ]

    const wrapper = shallow(<PurchasesContainer
      purchases={mockPurchases}
      />)

    expect(wrapper).toMatchSnapshot();
  })


})