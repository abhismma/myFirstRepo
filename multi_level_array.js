const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

//["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]

let alice =people[0]
//console.log(alice)
let aliceDetail = `${alice.name} lives in ${alice.address.city} on ${alice.address.street.name} `
//console.log(aliceDetail)
let bob =people[1]

let bobDetail = `${bob.name} lives in ${bob.address.city} on ${bob.address.street.name}`
//console.log(bobDetail)
let detail = [];
detail.push(aliceDetail,bobDetail)
console.log(detail)

//output: 





