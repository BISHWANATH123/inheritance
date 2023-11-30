
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}


Vehicle.prototype.displayInfo = function () {
    console.log(`${this.year} ${this.make} ${this.model}`);
};


function FourWheeler(make, model, year, numOfDoors) {
   
    Vehicle.call(this, make, model, year);

   
    this.numOfDoors = numOfDoors;
}


FourWheeler.prototype = Object.create(Vehicle.prototype);


FourWheeler.prototype.openTrunk = function () {
    console.log('Trunk opened');
};


const car = new FourWheeler('Toyota', 'Camry', 2023, 4);


car.displayInfo(); // Output: 2023 Toyota Camry


console.log(car.numOfDoors); // Output: 4


car.openTrunk(); // Output: Trunk opened
