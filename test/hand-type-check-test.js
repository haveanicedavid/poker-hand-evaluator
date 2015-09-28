var assert    = require('chai').assert;
var checkHand = require('../lib/hand-type-check.js');

describe('Hand type checker', function() {
  
  it('Evaluates a pair of aces', function () {
    var pair = checkHand.onePair('Ah As Kc Jd Qh');
    assert.equal(pair, 'Pair of Aces');
  });

});