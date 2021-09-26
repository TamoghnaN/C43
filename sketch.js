//DATATYPES - string, number, boolean, undefined, null
//string (anything within " ")
var a = "Tamoghna";
console.log(a);

//number
var b = 100;
console.log(b);
//boolean (true/false)
var c = true;
console.log(c);
//undefined
var d
console.log(d);
//null
var d = null
console.log(d);

//to change the text - var.toUpperCase() (or) var.toLowerCase()
console.log(a.toUpperCase());

//to display an integer without a variable - parseInt(number)
console.log(parseInt(-10));        //Nan = Not a Number

//ARITHMETIC OPERATORS = + , - , / , *, % (modulus)(REMINDER)
console.log(23452+27242)
console.log(10-40);
console.log(144/12);
console.log(14*14);
console.log(11%5);

//COMPARATIVE OPERATORS --> >, <, >=, <=, ==, !=
console.log(10>1);
console.log(100<2000);
console.log(10>=100);
console.log(100<=20);
console.log(10==5);
console.log(10!=2);


//CONDITIONAL PROGRAMMING --> if(){}else{}
if(b%2==0){
  console.log(b+ " is an even number");
}
else{
  console.log(b+" is an odd number");
}


//FOR LOOP --> for(initialisation; condition; incre/decre) {}
//to display numbers from 1 to 10
for(var i = 1; i <=10; i=i+1){
    console.log(i)
}


//display the even numbers from 38 to 56
for(var i = 38; i <=56; i+=2){
  console.log(i);
}

//ARRAYS 
var colors=["red","yellow","blue","green","orange"]
colors.push("black");
console.log(colors)




