class user {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let user1 = new user("Afia Mubasshira");
console.log(user1);