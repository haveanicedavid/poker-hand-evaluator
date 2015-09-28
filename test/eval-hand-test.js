var assert       = require('chai').assert;
var evaluateHand = require('../lib/evaluate-hand.js');

describe('Hand Evaluator', function() {

  // it('Exists', function () {
  //   assert(true);
  // });

  it('evaluates a two of a kind', function () {
    assert.equal(evaluateHand('Ah As 4c 9h 3d'), 'Two of a Kind') ;
  });

});