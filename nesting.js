const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };
//const user = { id: 123, profile: { name: "John Doe" } };

const id = user?.id ??"Information not available";
const profile = user?.profile ??"Information not available";
const name = user?.profile?.name ??"Information not available";
const address = user?.profile?.address ??"Information not available";
const city = user?.profile?.address?.city ??"Information not available";
const zipcode = user?.profile?.address?.zipcode ??"Information not available";
console.log(`User ${name}(ID :${id}) lives in ${city} (ZIP :${zipcode})`)


