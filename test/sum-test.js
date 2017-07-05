const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it ('Should not return undefined or NaN', function(){
      expect(sum()).to.not.equal(undefined || NaN);
      assert.not.equal(sum(),undefined || NaN);
    });

    it ('Parameters should be in one string', function(){
      expect(sum()).not.to.be.a('string');
      expect(sum()).not.to.be.a('object');
      expect(sum()).not.to.be.a('array');
    });
});
