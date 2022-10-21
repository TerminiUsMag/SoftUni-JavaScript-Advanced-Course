class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }

        this.spaceAvailable -= spaceRequired;
        let newPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(newPlant);
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (quantity <= 0)
            throw new Error(`The quantity cannot be zero or negative.`);

        let found = false;
        for (let plant of this.plants) {
            if (plant.plantName === plantName) {
                found = true;
                if (plant.ripe === true)
                    throw new Error(`The ${plantName} is already ripe.`);

                plant.quantity += quantity;
                plant.ripe = true;
                if (quantity === 1)
                    return `${quantity} ${plantName} has successfully ripened.`;

                return `${quantity} ${plantName}s have successfully ripened.`;
            }
        }
        if (!found)
            throw new Error(`There is no ${plantName} in the garden.`);
    }

    harvestPlant(plantName) {

        let found = false;
        for (let plant of this.plants) {
            if (plant.plantName === plantName) {
                found == true;
                if (!plant.ripe)
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);

                let name = plant.plantName;
                let quantity = plant.quantity;
                this.storage.push({ plantName: name, quantity });
                this.spaceAvailable += plant.spaceRequired;

                let index = this.plants.indexOf(plant);
                this.plants.splice(index, 1);

                return `The ${plantName} has been successfully harvested.`
            }
        }
        if (!found) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
    }

    generateReport() {
        let orderedPlants = this.plants.sort((a, b) => { a.plantName - b.plantName });
        let orderedNamePlants = [];
        let orderedNameStorage = [];
        for (let plant of orderedPlants) {
            orderedNamePlants.push(plant.plantName);
        }
        let empty = false;
        if (this.storage.length <= 0)
            empty = true;
        for (let i = 0; i < this.storage.length; i++) {
            if (i + 1 === this.storage.length)
                orderedNameStorage.push(`${this.storage[i].plantName} (${this.storage[i].quantity})`);
            else
                orderedNameStorage.push(`${this.storage[i].plantName} (${this.storage[i].quantity}), `);

        }



        return `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: ${orderedNamePlants.join(', ')}\nPlants in storage: ${empty ? 'The storage is empty.' : orderedNameStorage.join(',')}`
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant("raspberry", 10));
console.log(myGarden.ripenPlant("apple", 10));
console.log(myGarden.ripenPlant("orange", 1));
console.log(myGarden.harvestPlant("orange"));
console.log(myGarden.generateReport());