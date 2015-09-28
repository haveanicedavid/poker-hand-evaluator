var _ = require('lodash');


module.exports =  {
  
    royalFlush: function(hand) {
    },

    straightFlush: function(hand) {
    },

    fourOfAKind: function(hand) {
        return kindCount(hand, 4);
    },

    fullHouse: function(hand) {
        if (kindCount(hand, 2) && kindCount(hand, 3)) {
            return true;
        }
        return false;
    },
    
    flush: function(hand) {
        return kindCount(hand, 5);
    },
    
    // passed the value of each card
    straight: function(hand) {
    },
    
    threeOfAKind: function(hand) {
        return kindCount(hand, 3);
    },
    
    twoPair: function(hand) {
        return pairCount(hand, 2);
    },
    
    twoOfAKind: function(hand) {
        return kindCount(hand, 2);
    },
    
    // takes a hash where the key is a card and the value is its occurrance
    highCard: function(hand) {
        // won't need to check if it's the highest card, only need to evaluate
    },
};

function kindCount(hand, num) {
    var result = false;
    for (var cardCount in hand) {
        if (hand[cardCount] === num) {
            result = true;
        }
    }
    return result;
}

function pairCount (hand, num) {
    var pairCount = 0;
    for (var cardCount in hand) {
        if (hand[cardCount] === 2) {
            pairCount += 1;
        }
    }
    return pairCount === num ? true : false;
}
