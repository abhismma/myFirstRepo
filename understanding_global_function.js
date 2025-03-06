
let age = 25;

function displayAge() {
  console.log(`Current age: ${age}`);
}

function changeAge(newAge) {
  age = newAge; 
  console.log(`Updated age: ${age}`);
}

displayAge(); // 25
changeAge(30); // 30
displayAge(); //  30
