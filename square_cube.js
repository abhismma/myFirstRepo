//Write an arrow function that takes a number as input and
 //returns both its square and cube in an object, using implicit return.
 //The function should be as concise as possible.

 let squareAndCube = num => ({ square: num ** 2, cube: num ** 3 });

console.log(squareAndCube(3)); //{ square: 9, cube: 27 }


let squareCube = (a)=>{
    let obj={}
    obj.square = a**2;
    obj.cube = a**3;
    return obj
  }
  console.log(squareCube(7)) //{ square: 49, cube: 343 }