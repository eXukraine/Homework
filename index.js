/*const itog =[];
console.log(Array.isArray(itog))
function sovNum(number) {
	let a = 1;
	let i = 1;
	
		for (i = 2; i <= number/2; i++) {
			if (number % i == 0) {
				a += i
			}
		}
	return a
	console.log(a) 
}

function friendNum(n1,n2) {
	let a = n1;
	let b = n2;
	let c ;
		for (j = 0; j <= b; j++) {
			let c = sovNum(j)
				if (c >=a && c <= b) {
					if (sovNum (c) == j ) {
						if (c < j) {
						 itog.push(c,j)
						}
						
					}

				}
			
		}
	return ([itog])
}



console.log(friendNum([1,300]))*/

function sovNum(number) {
	let a = 1;
	let i = 1;
	
		for (i = 2; i <= number/2; i++) {
			if (number % i == 0) {
				a += i
			}
		}
	return a
	// console.log(a)
}

function friendNum(n1,n2) {
	let a = [n1];
	let b = [n2];
	let c ;
	//var itog =[];

		for (j = 0; j <= b; j++) {
			let c = sovNum(j)
				if (c >=a && c <= b) {
					if (sovNum (c) == j ) {
						if (c < j) {
						 a.push(c)
						 b.push(j)
						}
						
					}

				}
			
		}
	return ([a,b])
}



console.log(friendNum(1,300))


module.exports = {
    firstName: 'Yamkooi',
    secondName: 'Alexei',
    task: friendNum
}
