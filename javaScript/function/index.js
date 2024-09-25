// function declaration
function claAge1(birthYear){
    return 2037-birthYear;
}


const age1 = claAge1(2002);
console.log(age1);

// function expression
const Calage2 = function(birthYear){
    return 2024 - birthYear;
}

const age2 = Calage2(2002);
console.log(`this is age2 ${age2}`);

// arrow function

const claAge3 = birthYear => 2024-birthYear;

console.log(claAge3(1999));



const yearsUntilRetirement = (birthYear,Fname)=>{
    const age = 2024 - birthYear;
    const retirement = 60-age;
    return `${Fname} retires in ${retirement} years`;
}


console.log(yearsUntilRetirement(2002,'dinesh'))