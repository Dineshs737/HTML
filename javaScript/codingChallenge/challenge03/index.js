

//create array variable for storing Dolphis team..
let avgDolphins = 0;
let avgKoalas = 0;
let totelDolphins = 0;
let totelKoalas =0;

const scoreDolphins = [96,108,89];
const scoreKoalas = [88,91,110];

lengthOfArray = scoreDolphins.length;

for(let i=0;i<lengthOfArray;i++){
    totelDolphins +=scoreDolphins[i]
    totelKoalas +=scoreKoalas[i]

}

avgDolphins = totelDolphins/lengthOfArray;
avgKoalas = totelKoalas/lengthOfArray;

if(avgDolphins>avgKoalas) console.log(`Dolphins win the trophy`);
else if(avgDolphins<avgKoalas) console.log(`Koalas  win the trophy`);
else console.log(`Both win the trophy`);

