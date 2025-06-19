function factorial(num){
	 let result = 1;
	 for(let i = 1; i <= num; i++){
		 result *= i;
	 }
	return result
}
console.log(factorial(4))

function max(numArray){
numArray.sort((a,b)=>(b-a))
	return numArray[0]
	
}
console.log(max([1,2,3,4,5,6,7,8,9,10]))

function getNumConsonant(str){
	str.toLowerCase()
	let vowels = ['a','e','i','o','u']
	let count = 0
	for(let i = 0; i < str.length; i++)
		if(!vowels.includes(str[i])){
			count++
		}
	return count
}
console.log(getNumConsonant('whater'))

let result =''
function mutiplicationTable(num){
	for(let i = 1; i <= 12; i++){
		result += `${num} * ${i} = ${num*i}\n`
	}
	return result
}
console.log(mutiplicationTable(4))

function getReverse(str, callback){
	return callback(str)
}
function setReverse(str){
	return str.split('').reverse().join('')
} 
const resultt = setReverse('abdesd',setReverse)
console.log(resultt)