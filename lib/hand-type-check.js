var _ = require('lodash');

module.exports =  {
  
    straightFlush: function() {
    },

    fullHouse: function() {
    },
    
    flush: function() {
    },
    
    straight: function() {
    },
    
    threeOfAKind: function() {
    },
    
    twoPair: function(hand) {
        var pairCount = 0;
        for (var cardCount in hand) {
            if (hand[cardCount] === 2) {
                pairCount += 1;
            }
        }
        return pairCount === 2 ? true : false;
    },
    
    onePair: function(hand) {
        var result = false;
        for (var cardCount in hand) {
            if (hand[cardCount] === 2) {
                result = true;
            }
        }
        return result;
    },
    
    // takes a hash where the key is a card and the value is its occurrance
    highCard: function(hand) {
        // won't need to check if it's the highest card, only need to evaluate
    },

};