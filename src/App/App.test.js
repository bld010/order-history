import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

  let wrapper = null;
  let mockPurchases = [
    {name: 'X'},
    {name: 'Y'},
    {name: 'Z'}
  ]

  beforeEach(()=> {
    wrapper=shallow(<App />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should add new purchases', () => {
    const mockEvent = {
      preventDefault: () => {}
    }
    const mockNewPurchase = {name:'W'}
    const mockPostNewPurchase = jest.fn();
    wrapper.setState({purchases: mockPurchases});

    wrapper.instance().addNewPurchase(mockEvent, mockNewPurchase)
    wrapper.instance().postNewPurchase = mockPostNewPurchase;

    const expected = wrapper.state().purchases

    expect(expected).toEqual([...mockPurchases, mockNewPurchase])
  })


  describe('fetchPurchases', () => {

    let mockPurchases = [
      {name: 'X'},
      {name: 'Y'},
      {name: 'Z'}
    ]
  
    window.fetch = jest.fn()
      .mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockPurchases)
        })
      })
    

    it('should call fetch with the correct url', () => {
        wrapper.instance().fetchPurchases();
        expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/purchases')
    })

    it('should return an array of ideas (happy)', () => {
      let fetchPurchases = wrapper.instance().fetchPurchases;
      
      expect(fetchPurchases()).resolves.toEqual(mockPurchases)

    })

    it('should return an error (sad)' , () => {
      window.fetch = jest.fn()
        .mockImplementation(() => {
          return Promise.resolve({
            ok: false
          })
        })

      let fetchPurchases = wrapper.instance().fetchPurchases;

      expect(fetchPurchases()).rejects.toEqual(Error('Error fetching purchases.'))

    })

  })


})