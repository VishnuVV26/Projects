// Normal function
let num=[2,3,4,5,6,7,8,9,10];

let asquare=num .map(function(x)
{
    return x*x;
})
console.log(asquare);
// Arrow function
let square =num.map(x=>x*x);
console.log(square);