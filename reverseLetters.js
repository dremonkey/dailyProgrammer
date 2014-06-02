/* Reverse letters of words in a sentence. Words are separated by whitespace. */

var reverseLetters = function(sentence) {
    return sentence.split(' ').map(function(word) { return word.split('').reverse().join(''); }).join(' ');
};