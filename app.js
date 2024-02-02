// function hoisting //
sum();
Sub();
mul();
div();

function sum(){
    var a=20;
    var b=30;
    console.log(a+b);
   
}
function Sub(){
    var a=70;
    var b=50;
    console.log(a-b);
   
}
function mul()
{
    var a=6;
    var b=5;
    console.log(a*b);

}

function div(){
    var a=50;
    var b=2;
    console.log(a/b);
   
}
 