

function sovNum(number) {
	let a = 1;
	let i = 1;
	
		for (i = 2; i <= number/2; i++) {
			if (number % i == 0) {
				a += i
			}
		}
	return a
}

function friendNum(n1,n2) {
	let a = n1;
	let b = n2;
	let c ;
	let sum = [];
	while (a == 0 || a == 284 || b === a) {
		return sum
	}
	while (a < 0 || a == 300 || a !== 1  ) {
		return false
	}


	for (j = 0; j <= b; j++) {
		let c = sovNum(j)
			if (c >=a && c <= b) {
				if (sovNum (c) == j ) {
					if (c < j) {
					sum.push(c,j)
					}
					
				}

			}
		
	}
	return ([sum])
}



console.log(friendNum(1,300))


module.exports = {
    firstName: 'Yamkooi',
    secondName: 'Alexei',
    task: friendNum
}
