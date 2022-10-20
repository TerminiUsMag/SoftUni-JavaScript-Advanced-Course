function solve(number) {
    return function add(numToAdd) {
        return (number + numToAdd);
    }
}