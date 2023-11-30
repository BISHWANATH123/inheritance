// Vehicle constructor
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Method for displaying vehicle information
Vehicle.prototype.displayInfo = function () {
    console.log(`${this.year} ${this.make} ${this.model}`);
};

// FourWheeler constructor inheriting from Vehicle
function FourWheeler(make, model, year, numOfDoors) {
    // Inheriting properties from the Vehicle constructor
    Vehicle.call(this, make, model, year);

    // Adding specific property for FourWheeler
    this.numOfDoors = numOfDoors;
}

// Using Object.create() for inheritance
FourWheeler.prototype = Object.create(Vehicle.prototype);

// Method specific to FourWheeler
FourWheeler.prototype.openTrunk = function () {
    console.log('Trunk opened');
};

// Creating instances
const car = new FourWheeler('Toyota', 'Camry', 2023, 4);

// Accessing inherited method
car.displayInfo(); // Output: 2023 Toyota Camry

// Accessing own property
console.log(car.numOfDoors); // Output: 4

// Accessing method specific to FourWheeler
car.openTrunk(); // Output: Trunk opened
