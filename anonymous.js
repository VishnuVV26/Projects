//Anonymous function //
let addsum=function(x,y)
{
    return x+y;
    
}
console.log(addsum(2,5));
//Anonymous function as argument to another function//
function op(x,y,operations){
    return operations(x,y);
}

let add=op(10,50,function(a,b)
{
    return a+b;
    
})
let sum=op(1000,500,function(a,c){
    return a-c;
})
console.log(add);
console.log(sum);