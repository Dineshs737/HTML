// console.log("goog moring dinesh ");

// arithemetic operator

const ageDinesh = 2024 -2002;
const ageShalini = 2024-1999;
console.log(`Age of Dinesh is ${ageDinesh}`,`\nAge of Shalini is ${ageShalini}`);

// multiply values using * operator

let var1 = 10;
var1 = var1*10// one way to write  var1 = 10 * 10
console.log("value of var1 is "+var1);
var1 *= var1; //another way to write code var1 = 100 * 100;
console.log("value of var1 is "+var1);
//write powr using ** operator

var1 =2;

console.log("value of var1 is "+var1);

var1 = var1 **3; // var1 = 2^3 output ---> 8

console.log("value of var1 is "+var1);

//  + operator using we concant two string togther

let Fname = "Uthyakumar";
let Lname = "Dinesh";

let fullName = Fname +" "+Lname; // full name = Uthayakumar Dinesh one method
console.log(`Full name is ${fullName}`)
// write using teplate using another method
fullName = `${Lname} ${Fname}`;
console.log(`Full name is ${fullName}`)

// next method we just put string function name concat()
 fullName = Fname.concat(" "+Lname)
console.log(fullName)

//assignment operators
/*
= normal assengment
+= x = x+value
*= x = x*value
-= x = x-value
/= x = x/value
%= x = x%value
**= x = x**value


*/


//comparison operator

console.log(ageDinesh > ageShalini); // gerather than
console.log(ageDinesh != ageShalini); // not equal
console.log(ageDinesh <= ageShalini);// less than and equal
console.log(ageDinesh >= ageShalini);//gerather than and eaqual
console.log(ageDinesh < ageShalini);//less than

/* ************************ operator Precedence  *************************** */
 console.log("operator Precedence");
console.log(2024 -1999 > 2024-2002);

console.log("get avrage age ");
let avg = (ageDinesh + ageShalini) /2;
console.log(`Avrage age is ${avg}`);



