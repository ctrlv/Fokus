const equalTo100 = (a,b) => a === 100 || b === 100 || ( a + b ) === 100;

console.log(equalTo100(100,0));
console.log(equalTo100(0,100));

console.log(equalTo100(40,60));
console.log(equalTo100(30,70));


const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('matheus.rps'));