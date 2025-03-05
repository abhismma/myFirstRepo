function personInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age},Course : ${this.course}`);
}

let student = {
    name: "Alice",
    age: 22,
    course: "Computer Science"
  };

personInfo.call(student);
