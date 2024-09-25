// type covering falsy values

console.log(Boolean(null))
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(''))

const money = 0;

/*if(money){
    console.log(`don't spend it all :)`);
}
else{
    console.log(`You should get a job !`);
}//*/


const favorite  = prompt(`What is your favourite number ?`);

if(favorite ==23) console.log(`Cool ! ${favorite} an amzaing number !`);

else{
    console.log(`is not bad number1`)
}