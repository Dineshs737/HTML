const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
///console.log(BMIMark, BMIJohn);

BMIJohn = BMIJohn.toFixed(1);
BMIMark = BMIMark.toFixed(1);

/*if(BMIJohn <BMIMark){
console.log("Mark's BMI "+BMIMark + " is higher than John's "+ BMIJohn+" !");
}
else{
console.log("John's BMI "+BMIJohn + " is higher than Mark's "+ BMIMark+" !");


}*/


if(BMIJohn <BMIMark){
console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
}
else{
console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);


}