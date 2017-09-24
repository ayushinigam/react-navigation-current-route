"use strict"
const dummyNavigationState = require('./navStoreData.mock.json');
const getCurrentRouteName = require('../index.js');

describe('getCurrentRouteName from navigation state', () => {
  xit('Should return the current route when nav state passed', () => {
    const expected = 'NextGrandChildScreen2';
    expect(getCurrentRouteName(dummyNavigationState)).toEqual(expected);
    expect(getCurrentRouteName(null)).toEqual(null);
  });
  xit('Should return the null when navigation state not passed', () => {
    expect(getCurrentRouteName(null)).toEqual(null);
  });
  it('Should return the null when passed navigation state doesnt exist', () => {
    expect(getCurrentRouteName({random: 'test'})).toEqual(null);
  });
});
