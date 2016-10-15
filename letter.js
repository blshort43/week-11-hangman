   
var Game = require("./game.js");

var dashArray = [];
var newBlankDashArray = [];


for (var i = 0; i < Game.randomWord.length; i++) {
        dashArray.push("_" + " ");
        newBlankDashArray = dashArray.join('');
        newDashArray = newBlankDashArray;
    };

module.exports = {
	newBlankDashArray: newBlankDashArray,
	dashArray: dashArray
};


