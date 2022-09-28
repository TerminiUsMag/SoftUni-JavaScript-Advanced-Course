function solve(towns) {
    let registry = {};
    for (town of towns) {
        let info = town.split(' <-> ');
        let name = info[0];
        let population = Number(info[1]);
        if (registry[name] !== undefined && registry[name] !== null)
            registry[name] += population;
        else
            registry[name] = population;
    }
    for (const [key, value] of Object.entries(registry)) {
        console.log(`${key} : ${value}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);