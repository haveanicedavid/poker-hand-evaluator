module.exports = evaluateHand;

var _          = require('lodash');
var handIs     = require('../lib/hand-type-check.js');

var cardRanks = {
  'A': 14,
  'K': 13,
  'Q': 12,
  'J': 11,
  '10': 10,
  '9': 9,
  '8': 8,
  '7': 7,
  '6': 6,
  '5': 5,
  '4': 4,
  '3': 3,
  '2': 2,
};

function evaluateHand (hand) {
  var cardSuitCount  = {};
  // format: {1: 1, 2: 0}
  var cardValueCount = {};
  // var cards          = hand.split(' ');

  _.each(hand.split(' '), function(card) {
    var cardSuit = card.slice(-1);
    var value    = cardRanks[card.substring(0, card.length - 1)];

    cardValueCount[value] ? cardValueCount[value] += 1 : cardValueCount[value] = 1;
    cardSuitCount[cardSuit] ? cardSuitCount[cardSuit] += 1 : cardSuitCount[cardSuit] = 1;
  });

  if (handIs.royalFlush(cardSuitCount, cardValueCount)) {
    return 'Royal Flush';
  }

  if (handIs.straightFlush(cardSuitCount, cardValueCount)) {
    return 'Straight Flush';
  }

  if (handIs.fourOfAKind(cardValueCount)) {
    return 'Four of a Kind';
  }

  if (handIs.fullHouse(cardValueCount)) {
    return 'Full House';
  }

  if (handIs.flush(cardValueCount)) {
    return 'Flush';
  }

  if (handIs.straight(cardValueCount)) {
    return 'Straight';
  }

  if (handIs.threeOfAKind(cardValueCount)) {
    return 'Three of a Kind';
  }

  if (handIs.twoPair(cardValueCount)) {
    return 'Two Pair';
  }

  if (handIs.twoOfAKind(cardValueCount)) {
    return 'Two of a Kind';
  }

  return 'High Card';
}
