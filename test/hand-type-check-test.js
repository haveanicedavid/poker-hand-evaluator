var assert    = require('chai').assert;
var checkHand = require('../lib/hand-type-check.js');

describe('Pair Checker', function() {
  it('Returns false if there is no pair', function () {
    var pair = checkHand.onePair({'A': 1, 'Q': 1, 'K': 1, '9': 1, '7': 1});
    assert.equal(pair, false);
  });

  it('Returns true if there is a pair', function () {
    var pair1 = checkHand.onePair({'A': 2, 'Q': 1, 'K': 1, '9': 1});
    var pair2 = checkHand.onePair({'A': 1, 'Q': 2, 'K': 1, '9': 1});
    var pair3 = checkHand.onePair({'A': 1, 'Q': 1, 'K': 1, '9': 2});

    assert.equal(pair1, true);
    assert.equal(pair2, true);
    assert.equal(pair3, true);
  });
});

describe('twoPair', function() {
  it('returns false if there is only one pair', function () {
    var pair1 = checkHand.twoPair({'A': 2, 'Q': 1, 'K': 1, '9': 1});
    var pair2 = checkHand.twoPair({'A': 1, 'Q': 2, 'K': 1, '9': 1});
    var pair3 = checkHand.twoPair({'A': 1, 'Q': 1, 'K': 1, '9': 2});

    assert.equal(pair1, false);
    assert.equal(pair2, false);
    assert.equal(pair3, false);
  });

  it('Returns true if there are 2 pair', function () {
    var pair1 = checkHand.twoPair({'A': 2, 'Q': 2, 'K': 1});
    var pair2 = checkHand.twoPair({'A': 1, 'Q': 2, 'K': 2});

    assert.equal(pair1, true);
    assert.equal(pair2, true);
  });
});

describe('twoPair', function() {
  it('returns false if there is only one pair', function () {
    var pair1 = checkHand.twoPair({'A': 2, 'Q': 1, 'K': 1, '9': 1});
    var pair2 = checkHand.twoPair({'A': 1, 'Q': 2, 'K': 1, '9': 1});
    var pair3 = checkHand.twoPair({'A': 1, 'Q': 1, 'K': 1, '9': 2});

    assert.equal(pair1, false);
    assert.equal(pair2, false);
    assert.equal(pair3, false);
  });

  it('Returns true if there are 2 pair', function () {
    var pair1 = checkHand.twoPair({'A': 2, 'Q': 2, 'K': 1});
    var pair2 = checkHand.twoPair({'A': 1, 'Q': 2, 'K': 2});

    assert.equal(pair1, true);
    assert.equal(pair2, true);
  });
});