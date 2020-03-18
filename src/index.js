module.exports = function check(str, bracketsConfig) { 
	let arr = bracketsConfig.flat().join('').match(/.{1,2}/g);

	let wasReplaced = true;
	let count = 0;
	while (wasReplaced && count < 100) {
		wasReplaced = false;
		for (let j=0; j<arr.length; j++) {
			
			let initStr = str;
			str = str.replace(arr[j], '');

			if (initStr != str) {
				wasReplaced = true;
			}
		}
		count++;
	}

	return !str;
}; 
