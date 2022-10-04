function solve(name, population, treasury) {
    let obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            percentage = percentage / 100;
            let increaseByPercentage = this.population * percentage;
            this.population += increaseByPercentage;
            this.population = Math.floor(this.population);
        },
        applyRecession(percentage) {
            percentage = percentage / 100;
            let recessionByPercentage = this.treasury * percentage;
            this.treasury -= recessionByPercentage;
            this.treasury = Math.floor(this.treasury);
        }
    }
    return obj;
}
let newObj = solve("Sofia", 1000, 10000);
console.log(newObj);