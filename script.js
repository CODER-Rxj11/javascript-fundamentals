// DAY - 1

// COMPILE TIME ERROR
// WORKS AT INITIALIZATION AND DECLARATION PHASE

// console.log(a);
// var a=69; // UNDEFINED

// TEMPORAL DEAD ZONE
// let b=21; // CANNOT ACCESS B
// const c=96; // CANNOT ACCESS B

// FUNCTIONS ARE FULLY HOISTED!!!
// console.log(sum(1,2));

// function sum(a,b){
//     return a+b;
// }

// console.log(a(1,2)); // a is not a function
// console.log(a);
// console.log(b); // Cannot access b
// console.log(c);

// var a = function(a,b){
//     return a+b;
// }

// let b = (a,b) => a+b;
// const c = (a,b) => a+b;

// IMMUTABLE
// let a = 12;
// let b = 15;
// a = 13;
// console.log(a,b);
 
//MUTABLE
// let c = [1,2];
// let d = c;
// c[0] = 3;
// console.log(c,d);

// SPREAD OPERATOR
// let c = [1,2];
// let d = [...c];
// c[0] = 3;
// console.log(c,d);

// REST OPERATOR
// function hobbies(...n){
//     console.log(n);
// }
// hobbies(1,2,3,4,5)

// ARGUMENTS IN PLACE OF REST OPERATOR
// function hobbies(){
//     console.log(arguments);
// }
// hobbies(1,2,3,4,5)


// DAY - 2

// function one(){
//     console.log(this);
// }
// one()

// function two(){
//     console.log(arguments[0]);
// }
// two(0,1,2,3,4)

// function variableEnviroment(){
//     let x = 10;
// }
// variableEnviroment(0,1,2,3,4)

// function chainingConcept(){
//     let x = 10;
//     return function(){
//         var y = 12;
//         return {x,y}; //x:10,y:12
//     }
// }
// console.log(chainingConcept()());

// EXAMPLE OF LEXICAL SCOPING
// -> FUNCTION DATA AVAI AT FUNCTION CREATION NOT AT THE PLACE WHERE IT IS CALLED 

// function a(){
//     var x = 12;
// }

// function b(){
//     a();
//     console.log(x); // REFERENCE ERROR
// }
// b()

// CALL APPLY

// let profile = {
//     firstName : "Raj",
//     lastName : "Malpani",
//     fullName : function (p) {
//         return `${this.firstName} ${this.lastName}${p}`      
//     }
// }

// let profile1 = {
//     firstName : "Kanak",
//     lastName : "Sharma",
// }

// let res = profile.fullName.call(profile1,"!"); // PROFILE1 IS THE THIS FOR CALL FUNCTION
// let res2 = profile.fullName.apply(profile1,["!"]); 
// console.log(res);
// console.log(res2);

// CURRYING - BIND
// -> TO STOP FUNCTION INVOCATION AS PER THE AVAILABILITY OF PARAMETERS

// function multiply(x,y){
//     return x*y;
// }

// let x = 12;

// let multiplyX = multiply.bind(this,x)
// // console.log(multiplyX);
// let y=2;
// let fullCall = multiplyX.bind(this,y);
// console.log(fullCall());

