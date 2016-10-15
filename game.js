var wordlist = ['moustache', 'bicycle', 'skinny jeans', 'flannel', 'kombucha', 'fedora'];
var wordArray = [];
var randomWord = "";


function wordChooser(list) {
    randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    wordArray = randomWord.split("").filter(function(item, pos) {
        return randomWord.indexOf(item) == pos;
    })
};

wordChooser(wordlist);

console.log(randomWord);

module.exports = {
	randomWord: randomWord,
	wordArray: wordArray
};


