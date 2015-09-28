module.exports = evaluateHand;
var _ = require('lodash');

var cardRanks = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  10: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2,
};


// Given a hand, spilt that hand into cards
// Evaluate the hand
  // Straight Flush
  // 4 of a kind
    // in cardSuitCount, see if any cards have a value or 4
  // Full house
  // flush = 
    // all of one suit
  // straight 
    // make an array of every straight combo, 
  // Three of a kind
    // in cardSuitCount, see if any cards have a value or 3
  // Two pair
    // in cardSuitCount, see if any cards have a value or 2
  // One Pair
    // in cardSuitCount, see if any cards have a value or 1
  // High card
    // Evaluate each card only if there's no matching pattern
// 
function evaluateHand (hand) {
  var cardSuitCount  = {};
  var cardValueCount = {};
  var cards      = hand.split(' ');

  _.each(cards, function(card) {
    var cardSuit  = card.slice(-1);
    var value = card.substring(0, card.length - 1);

    cardValueCount[value] ? cardValueCount[value] += 1 : cardValueCount[value] = 1;
    cardSuitCount[cardSuit] ? cardSuitCount[cardSuit] += 1 : cardSuitCount[cardSuit] = 1;
  });

  console.log(cardSuitCount);
  console.log(cardValueCount);
}

function straightFlush(cardSuitCount, cardValueCount) {

}


