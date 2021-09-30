var size = process.argv[2];

var password = ""; // "var password" === error undefined

for (let i = 0; i < size; i++) {
	password += String.fromCharCode(Math.random() * (126 - 33) + 33);
}

console.log(password);