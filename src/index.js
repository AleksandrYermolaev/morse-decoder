const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let letterCode = [];
  	const expressionCode = [];
	const exprArr = expr.split('');
	const dotsDashesArr = [], dotsDashesSubArr = [];
	let result = '';

	//Разбиваем строку на массив закодированных букв
  	for (let i = 0; i < exprArr.length; i++) {
    	letterCode.push(exprArr[i]);
    	if (letterCode.length === 10) {
    		expressionCode.push(letterCode.slice(0,10));
    		letterCode.length = 0;
  		}
	}
	
	//Создаем массив с точками и тире
	expressionCode.forEach(element => {
		if (element.includes('*')) {
			dotsDashesSubArr.push(' ');
		} else {
			for (let i = 0; i < element.length; i = i + 2) {
				if (element[i] !== '0') {
					if (element[i+1] === '1') {
						dotsDashesSubArr.push('-');
					} else {
						dotsDashesSubArr.push('.');
					}
				}
			}
		}
		dotsDashesArr.push(dotsDashesSubArr.slice(0,dotsDashesSubArr.length).join(''));
		dotsDashesSubArr.length = 0;
	});

	//Превращаем точки и тире в строку букв
	dotsDashesArr.forEach(value => {
		if (MORSE_TABLE[value]) {
			result += MORSE_TABLE[value];
		} else result += ' ';
	})

	return result;
}

module.exports = {
    decode
}