var assert       = require('chai').assert;
var evaluateHand = require('../lib/evaluate-hand.js');

describe('Hand Evaluator', function() {

  it('evaluates a two of a kind', function () {
    assert.equal(evaluateHand('Ah As 4c 9h 3d'), 'Two of a Kind') ;
  });

  it('evaluates a royal flush', function () {
    assert.equal(evaluateHand('Ah Kh Qh Jh 10h'), 'Royal Flush') ;
  });

  it('evaluates a straight flush', function () {
    assert.equal(evaluateHand('9h Kh Qh Jh 10h'), 'Straight Flush') ;
  });

  // it('evaluates a straight', function () {
  //   assert.equal(evaluateHand('9h Kh Qh Jh 10h'), 'Straight Flush') ;
  // });

});