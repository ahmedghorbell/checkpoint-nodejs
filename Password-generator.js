var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true,
    uppercase: true,
    symbols: true,
    strict: true
});

// '!HsPOaM1o5clear'
console.log(password);