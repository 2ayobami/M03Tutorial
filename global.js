// console.log(global);

setTimeout(() => {
	console.log('in the timeout');
	clearInterval(int);
}, 3000);


const int = setInterval(() => {
	console.log('in the interval');
}, 1000)


console.log(__dirname); // Full directory path to the file we're working on
console.log(__filename); // Full path to the file we're working on

console.log(document.querySelector);