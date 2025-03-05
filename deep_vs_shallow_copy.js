let student = {
    name: "Alice",
    age: 22,
    course: "Computer Science"
  };
 // let jsonString = JSON.stringify(student);
  //console.log(jsonString)
  
  function deepClone(obj) {
      return JSON.parse(JSON.stringify(obj));
  }
  
  let clone = deepClone(student);

  console.log("Clone:", clone); 
 