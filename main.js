let arrayObj = [1, 2, 3, "priya", true];
console.log (arrayObj[0]); //1
console.log (arrayObj[1]); //2
console.log (arrayObj[2]); //3 
console.log (arrayObj[3]); //priya
console.log (arrayObj[4]); //true


console.log(arrayObj.length); //5

for(let counter = 0; counter<= arrayObj.length-1; counter++)
{
 console.log(arrayObj[counter]);
}

// for each
for (let values in arrayObj) //in
{
    console.log(values); // 0 1 2 3 4 
}

for (let values1 of arrayObj) //of
{
    console.log(values1); // 1 2 3 priya true
    console.log(arrayObj[values1]);
}