var foreignAlphabetSort = function(inputArray) {
    var alphabetArr = inputArray[0].split(' ')[1].toUpperCase().split('');
    var alphabet = {};
    var words = inputArray.slice(1);

    // create alphabet object
    alphabetArr.forEach(function(character, index) {
        if (!alphabet.hasOwnProperty(character)) {
            alphabet[character] = index;        
        }
    });

    // define recursive sorting function
    var sortFunc = function(wordA, wordB) {
        var orderA = alphabet[wordA[0].toUpperCase()];
        var orderB = alphabet[wordB[0].toUpperCase()];
        if (orderA !== orderB) { return orderA - orderB; }
        if (orderA === orderB) {
            if (wordA.length === 1 || wordB.length === 1) {
                return wordA.length - wordB.length;
            } else {
                return sortFunc(wordA.slice(1), wordB.slice(1)); 
            }
        }
    };

    return words.sort(sortFunc);
};

/* 
Description:
The Gorellians, at the far end of our galaxy, have discovered various samples of English text from our electronic transmissions, but they did not find the order of our alphabet. Being a very organized and orderly species, they want to have a way of ordering words, even in the strange symbols of English. Hence they must determine their own order.
For instance, if they agree on the alphabetical order:
UVWXYZNOPQRSTHIJKLMABCDEFG
Then the following words would be in sorted order based on the above alphabet order:
WHATEVER
ZONE
HOW
HOWEVER
HILL
ANY
ANTLER
COW
Input:
The input will be formatted to enter the number of words to sort and the new Alphabet ordering and a list of words to sort. n should be > 0. The alphabet is assumed to be 26 letters with no duplicates and arranged in the new order. Also assumed there are n strings entered.
n (new alphabet ordering)
(word 1 of n)
(word 2 of n)
....
(word n of n)
Example input 1:
8 UVWXYZNOPQRSTHIJKLMABCDEFG
ANTLER
ANY
COW
HILL
HOW
HOWEVER
WHATEVER
ZONE
Output:
The list of words in sorted order based on the new order of the alphabet. The sort order should be based on the alphabet (case insensitive) and the words should be output to appear as the words were entered.
Example of output for input 1:
WHATEVER
ZONE
HOW
HOWEVER
HILL
ANY
ANTLER
COW
Notes:
The sorting should be case insensitive. Meaning that you do not sort it based on the ASCII value of the letters but by the letters. Your solution should handle an alphabet order that might be typed in upper/lower case. It will sort the words by this order and output the words as they were typed in.
Example Input 2:
5 ZYXWVuTSRQpONMLkJIHGFEDCBa
go
aLL
ACM
teamS
Go
Example output 2:
teamS
go
Go
aLL
ACM
*/