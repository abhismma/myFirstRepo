// Constructor function for Car
function Car(make, model, year, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type;
    this.isAvailable = true;
}

// Constructor function for Customer
function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}

// Method to rent a car
Customer.prototype.rentCar = function (car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, ${car.make} ${car.model} is already rented.`);
    }
};

// Method to return a car
Customer.prototype.returnCar = function (car) {
    if (this.rentedCars.includes(car)) {
        setTimeout(() => {
            car.isAvailable = true;
            this.rentedCars = this.rentedCars.filter(c => c !== car);
            console.log(`${this.name} returned the ${car.make} ${car.model}.`);
        }, 2000);
    } else {
        console.log(`This car was not rented by ${this.name}.`);
    }
};

// PremiumCustomer constructor inheriting from Customer
function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate;
}
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

// Function to calculate rental price
function calculateRentalPrice(car, days, customer) {
    let basePrice = 50;
    let typeMultiplier = car.type === "SUV" ? 1.5 : 1;
    let totalPrice = basePrice * typeMultiplier * days;

    if (customer instanceof PremiumCustomer) {
        totalPrice *= (1 - customer.discountRate / 100);
    }

    console.log(`Total rental cost for ${customer.name}: $${totalPrice.toFixed(2)}`);
}

// Function to handle maintenance
function Maintenance(car, delay) {
    console.log(`Car ${car.make} ${car.model} is under maintenance...`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`Car ${car.make} ${car.model} is now available after maintenance.`);
    }, delay);
}

// Demonstration
const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
const car2 = new Car("Honda", "CR-V", 2021, "SUV");
const car3 = new Car("Ford", "Mustang", 2019, "Sports");

const customer1 = new Customer("Alice");
const customer2 = new PremiumCustomer("Bob", 10);

customer1.rentCar(car1);
calculateRentalPrice(car1, 3, customer1);
customer2.rentCar(car2);
calculateRentalPrice(car2, 5, customer2);

setTimeout(() => {
    customer1.returnCar(car1);
}, 4000);

Maintenance(car3, 3000);
