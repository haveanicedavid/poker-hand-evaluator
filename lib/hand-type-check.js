var _ = require('lodash');



module.exports =  {
  
    royalFlush: function(suitCount, valueCount) {
        var cardValues = _.keys(valueCount)
                          .sort(function(a, b) { return a - b; });

                      console.log(cardValues);
        var check = function(arr) {
            var checkarr= ['10', '11', '12', '13', '14'];
            for (var i = 0; i < arr.length; i++ ) {
                if (arr[i] !== checkarr[i]) {
                    return false;
                }
                return true;
            }
        };

        return this.flush(suitCount) && check(cardValues);
    },

    straightFlush: function(suitCount, valueCount) {
        return this.flush(suitCount) && this.straight(valueCount);
    },

    fourOfAKind: function(valueCount) {
        return kindCount(valueCount, 4);
    },

    fullHouse: function(valueCount) {
        if (kindCount(valueCount, 2) && kindCount(valueCount, 3)) {
            return true;
        }
        return false;
    },
    
    flush: function(suitCount) {
        return kindCount(suitCount, 5);
    },
    
    straight: function(valueCount) {
        var keys = _.keys(valueCount)
                    .map(x => parseInt(x))
                    .sort(function(a, b) {return a - b;});


        for (var i = 0; i < keys.length - 1; i++) {
            if (keys[i+1] !== keys[i] + 1 ) { return false; }
        }
        return true;
    },
    
    threeOfAKind: function(valueCount) {
        return kindCount(valueCount, 3);
    },
    
    twoPair: function(valueCount) {
        return pairCount(valueCount, 2);
    },
    
    twoOfAKind: function(valueCount) {
        return kindCount(valueCount, 2);
    },
    
    // takes a hash where the key is a card and the value is its occurrance
    highCard: function(valueCount) {
        // won't need to check if it's the highest card, only need to evaluate
    },
};

function kindCount(valueCount, num) {
    var result = false;
    for (var cardCount in valueCount) {
        if (valueCount[cardCount] === num) {
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
