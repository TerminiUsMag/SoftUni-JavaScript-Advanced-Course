function solve(firstName, lastName) {
    return {
        firstName,
        lastName,
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        set fullName(value) {
            let parts = value.split(' ');
            if (parts.length < 2)
                return;
                this.firstName = parts[0];
                this.lastName = parts[1];
        }
    }
}