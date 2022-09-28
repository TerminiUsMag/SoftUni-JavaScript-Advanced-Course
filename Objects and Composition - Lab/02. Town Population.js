function solve(towns) {
    let registry = {};
    for (town of towns) {
        let info = town.split(' <-> ');
        registry[info[0]] = info[1];
    }
    console.log(registry);
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);