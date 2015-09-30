var assert    = require('chai').assert;
var checkHand = require('../lib/hand-type-check.js');

describe('Pair Checker', function() {
  it('Returns false if there is no pair', function () {
    var pair = checkHand.twoOfAKind({'14': 1, '12': 1, '13': 1, '9': 1, '7': 1});
    assert.equal(pair, false);
  });

  it('Returns true if there is a pair', function () {
    var pair1 = checkHand.twoOfAKind({'A': 2, 'Q': 1, 'K': 1, '9': 1});
    var pair2 = checkHand.twoOfAKind({'A': 1, 'Q': 2, 'K': 1, '9': 1});
    var pair3 = checkHand.twoOfAKind({'A': 1, 'Q': 1, 'K': 1, '9': 2});

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

describe('threeOfAKind', function() {
  it('returns true if there is three of a kind', function () {
    var pair1 = checkHand.threeOfAKind({'A': 3, 'Q': 1, 'K': 1});
    var pair2 = checkHand.threeOfAKind({'A': 1, 'Q': 3, 'K': 1});
    var pair3 = checkHand.threeOfAKind({'A': 1, 'Q': 1, 'K': 3});

    assert.equal(pair1, true);
    assert.equal(pair2, true);
    assert.equal(pair3, true);
  });

  it('returns false if there is not three of a kind', function () {
    var pair1 = checkHand.twoPair({'A': 2, 'Q': 1, 'K': 1, '9': 1});
    var pair2 = checkHand.twoPair({'A': 1, 'Q': 2, 'K': 1, '9': 1});
    var pair3 = checkHand.twoPair({'A': 1, 'Q': 1, 'K': 1, '9': 2});

    assert.equal(pair1, false);
    assert.equal(pair2, false);
    assert.equal(pair3, false);
  });
});

describe('fourOfAKind', function() {
  it('returns true if there is four of a kind', function () {
    var pair1 = checkHand.fourOfAKind({'A': 4, 'Q': 1});
    var pair2 = checkHand.fourOfAKind({'A': 1, 'Q': 4});

    assert.equal(pair1, true);
    assert.equal(pair2, true);
  });

  it('returns false if there is not three of a kind', function () {
    var pair1 = checkHand.fourOfAKind({'A': 3, 'Q': 1, 'K': 1});
    var pair2 = checkHand.twoPair({'A': 1, 'Q': 2, 'K': 1, '9': 1});
    var pair3 = checkHand.twoPair({'A': 1, 'Q': 1, 'K': 1, '9': 2});

    assert.equal(pair1, false);
    assert.equal(pair2, false);
    assert.equal(pair3, false);
  });

});

describe('Flush', function() {
  it('returns true if there is a flush', function () {
    var flush1 = checkHand.flush({'h': 5, 's': 0, 'c': 0,'d': 0});
    var flush2 = checkHand.flush({'h': 0, 's': 5, 'c': 0,'d': 0});
    var flush3 = checkHand.flush({'h': 0, 's': 0, 'c': 5,'d': 0});
    var flush4 = checkHand.flush({'h': 0, 's': 0, 'c': 0,'d': 5});

    assert.equal(flush1, true);
    assert.equal(flush2, true);
    assert.equal(flush3, true);
    assert.equal(flush4, true);
  });

  it('returns false if there is not a flush', function () {
    var flush1 = checkHand.flush({'h': 4, 's': 1, 'c': 0,'d': 0});
    var flush2 = checkHand.flush({'h': 1, 's': 3, 'c': 1,'d': 1});
    var flush3 = checkHand.flush({'h': 1, 's': 1, 'c': 1,'d': 2});
    var flush4 = checkHand.flush({'h': 2, 's': 1, 'c': 1,'d': 1});

    assert.equal(flush1, false);
    assert.equal(flush2, false);
    assert.equal(flush3, false);
    assert.equal(flush4, false);
  });
});

describe('full house', function() {
  it('returns true if there is a full house', function () {
    var fh1 = checkHand.fullHouse({'1': 3, '2': 2, '3': 0,'4': 0});
    var fh2 = checkHand.fullHouse({'1': 0, '2': 3, '3': 2,'4': 0});
    var fh3 = checkHand.fullHouse({'1': 0, '2': 0, '3': 3,'4': 2});
    var fh4 = checkHand.fullHouse({'1': 0, '2': 3, '3': 0,'4': 2});

    assert.equal(fh1, true);
    assert.equal(fh2, true);
    assert.equal(fh3, true);
    assert.equal(fh4, true);
  });

  it('returns false if there is not a full house', function () {
    var fh1 = checkHand.fullHouse({'1': 4, '2': 1, '3': 0,'4': 0});
    var fh2 = checkHand.fullHouse({'1': 1, '2': 3, '3': 1,'4': 1});
    var fh3 = checkHand.fullHouse({'1': 1, '2': 1, '3': 1,'4': 2});
    var fh4 = checkHand.fullHouse({'1': 2, '2': 1, '3': 1,'4': 1});

    assert.equal(fh1, false);
    assert.equal(fh2, false);
    assert.equal(fh3, false);
    assert.equal(fh4, false);
  });
});

describe('Straight', function() {
  it('returns true if there is a straight', function () {
    var s1 = checkHand.straight({1: 1, 2: 1, 3: 1, 4: 1, 5: 1});
    var s2 = checkHand.straight({6: 1, 7: 1, 8: 1, 9: 1, 10: 1});

    assert.equal(s1, true);
    assert.equal(s2, true);
  });

  it('returns true if there is a straight regardless of order', function () {
    var s1 = checkHand.straight({2: 1, 1: 1, 5: 1, 4: 1, 3: 1});
    var s2 = checkHand.straight({6: 1, 7: 1, 8: 1, 9: 1, 10: 1});

    assert.equal(s1, true);
    assert.equal(s2, true);
  });
});

describe('Straight Flush', function() {
  it('returns true if there is a straight', function () {
    var s1 = checkHand.straightFlush( {'h': 5, 's': 0, 'c': 0,'d': 0},{1: 1, 2: 1, 3: 1, 4: 1, 5: 1});
    // var s2 = checkHand.straightFlush({6: 1, 7: 1, 8: 1, 9: 1, 10: 1});

    // var flush1 = checkHand.flush();
    // var flush2 = checkHand.flush({'h': 0, 's': 5, 'c': 0,'d': 0});
    // var flush3 = checkHand.flush({'h': 0, 's': 0, 'c': 5,'d': 0});
    // var flush4 = checkHand.flush({'h': 0, 's': 0, 'c': 0,'d': 5});

    assert.equal(s1, true);
    // assert.equal(s2, true);
  });

  xit('returns true if there is a straight regardless of order', function () {
    var s1 = checkHand.straightFlush({2: 1, 1: 1, 5: 1, 4: 1, 3: 1});
    var s2 = checkHand.straightFlush({6: 1, 7: 1, 8: 1, 9: 1, 10: 1});

    assert.equal(s1, true);
    assert.equal(s2, true);
  });
});