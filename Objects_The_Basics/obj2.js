let tech_stack = "JavaScript, Python, Java, C++, Ruby, Go, Swift, TypeScript, PHP, SQL, HTML, CSS, React, Angular, Vue.js, Node.js, Express.js, Django, Flask, Spring Boot, Ruby on Rails, Laravel, ASP.NET Core";
const engineer = {};

engineer.skills = tech_stack;
engineer.experience = "5 years";
console.log(engineer);


// Object Constructor or factory function or factory pattern

function crate_user(name, age, role) {
    return {
        name: name,
        age : age,
        role: role,
        login() {
            console.log(this.name + " has logged in.");
        }
    }
}
const user1 = crate_user("Alice", 28, "Admin");
const user2 = crate_user("Humayun", 35, "User");
console.log(user1);
console.log(user2);
user1.login();
