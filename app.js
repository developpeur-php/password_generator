/*
 *
 * node app.js
 *
 */



var list_available_char = [
	"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
	"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
	"~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{",
	"}", ";", ":", ",", ".", "<", ">", "/", "?", "€", "£", "µ"
];

var size = 30;
var password = ""; // "var password" === error undefined

for (let index = 0; index < size; index++) {
	password += list_available_char[Math.floor(Math.random() * Math.floor(list_available_char.length - 1))];
}

console.log(password);
