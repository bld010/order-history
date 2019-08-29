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


  describe('API calls', () => {

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
    
      describe('fetchPurchases', () => {

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

      describe('postNewPurchase', () => {

        let mockNewPurchase = { 
          id: 1, 
          name: 'iPhone', 
          description: 'Expensive phone',
          img: 'www.apple.com/iphone.bmp',
          price: 900
         }

        it('should call fetch with the correct url', () => {
          wrapper.instance().postNewPurchase(mockNewPurchase)
          expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/purchases')
        })

        // it('should return an error (sad)', () => {
        //   window.fetch = jest.fn()
        //     .mockImplementation(() => {
        //       return Promise.resolve({
        //         ok: false
        //       }).then(resp => resp.json())
        //     })
            
          
        //   console.log(wrapper.instance().postNewPurchase(mockNewPurchase));

        //   expect(wrapper.instance().postNewPurchase(mockNewPurchase)).rejects.toEqual(Error('Error posting purchases.'))
          
        // })
      })

  })


})