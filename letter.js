var word=game.chosen.toUpperCase();
var initialdisplay=word.replace(/A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|0|1|2|3|4|5|6|7|8|9/g,"-");



var Letter = function(character) {
	// property to store the actual letter	
	this.character = character;
	// property/boolean if the letter can be shown 
	this.appear = false;
	
	this.letterRender = function() {
		//if appear is false then show the _
		//else appear is true then show character
		if (!appear) {
			return '_';
			console.log("wrong guess");
		} else {
			return this.character;
			console.log("So smart! correct guess!")
		}
	};
};

// export to use in word.js
module.exports = Letter;