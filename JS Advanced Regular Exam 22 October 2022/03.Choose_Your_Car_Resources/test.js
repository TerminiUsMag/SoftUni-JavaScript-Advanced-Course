const { assert } = require('chai');

const chooseYourCar = require('./chooseYourCar');

describe("Tests …", function () {

    describe("choosingType", function () {

        it("Invalid year", function () {

            assert.throw(() => { chooseYourCar.choosingType('Sedan', 'Red', 1899) }, Error, 'Invalid Year!');
            assert.throw(() => { chooseYourCar.choosingType('coupe', 'Blue', 2023) }, Error, 'Invalid Year!');

        });
        it('Not sedan', function () {

            assert.throw(() => { chooseYourCar.choosingType('Coupe', 'Black', 2010) }, Error, "This type of car is not what you are looking for.");
            assert.throw(()=>{chooseYourCar.choosingType('Mini',"Brown",2000)},Error,"This type of car is not what you are looking for.")
        });
        it('Meets requirements', () => {

            assert.equal(chooseYourCar.choosingType('Sedan', 'Black', 2010), `This Black Sedan meets the requirements, that you have.`);
            assert.equal(chooseYourCar.choosingType('Sedan', 'Red', 2022), "This Red Sedan meets the requirements, that you have.");
        });
        it("Doesn't meet requirements", () => {

            assert.equal(chooseYourCar.choosingType('Sedan', "Pink", 2009), "This Sedan is too old for you, especially with that Pink color.");
        });
    });
    describe("brandName", () => {
        it('Invalid arguments', () => {

            assert.throw(() => { chooseYourCar.brandName(10, 3) }, Error, "Invalid Information!");
            assert.throw(() => { chooseYourCar.brandName("notAnArray", 3) }, Error, "Invalid Information!");
            assert.throw(() => { chooseYourCar.brandName(["BMW", "Mercedes", "Audi"], '1') }, Error, "Invalid Information!");
            assert.throw(() => { chooseYourCar.brandName(["BMW", "Audi"], 4) }, Error, "Invalid Information!");
        });
        it('Should remove and element at the passed index', () => {

            assert.equal(chooseYourCar.brandName(['BMW', 'Mercedes', 'Audi'], 2), "BMW, Mercedes");
            assert.equal(chooseYourCar.brandName(['BMW', 'Mercedes', 'Audi'], 0), "Mercedes, Audi");
        });
    });
    describe("carFuelConsumption", () => {
        it("Invalid Information!", () => {

            assert.throw(() => { chooseYourCar.carFuelConsumption('0', '-1') }, Error, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption('0', -1) }, Error, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(10, '-1') }, Error, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(-5, 10) }, Error, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(-1, -2) }, Error, "Invalid Information!");
            assert.throw(() => { chooseYourCar.carFuelConsumption(0, 0) }, Error, "Invalid Information!");
        });
        it("Too much fuel", () => {

            assert.equal(chooseYourCar.carFuelConsumption(10, 10), 'The car burns too much fuel - 100.00 liters!');
            assert.equal(chooseYourCar.carFuelConsumption(10, 100), 'The car burns too much fuel - 1000.00 liters!');
            assert.equal(chooseYourCar.carFuelConsumption(1, 10), 'The car burns too much fuel - 1000.00 liters!');
            assert.equal(chooseYourCar.carFuelConsumption(1, 1), 'The car burns too much fuel - 100.00 liters!');
            
        });
        it("Efficient enough", () => {

            assert.equal(chooseYourCar.carFuelConsumption(23, 1), 'The car is efficient enough, it burns 4.35 liters/100 km.');
            assert.equal(chooseYourCar.carFuelConsumption(30, 1), 'The car is efficient enough, it burns 3.33 liters/100 km.');
            assert.equal(chooseYourCar.carFuelConsumption(14.28, 1), 'The car is efficient enough, it burns 7.00 liters/100 km.');
        });
    });
});
