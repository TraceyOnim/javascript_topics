function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.age;
}
var user = { firstName: "Tracey", lastName: "Onim", age: 29 };
document.body.textContent = greeter(user);
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeterStudent(student) {
    return "Good morning " + student.firstName + " " + student.middleName + " " + student.lastName;
}
var student = new Student("Tracey", "P", "Onim");
document.body.textContent = greeterStudent(student);
console.log(student.fullName);
function greeterStudent2() {
    var student2 = new Student("Stacy", "P", "Onim");
    return "Good morning " + student2.fullName;
}
document.body.textContent = greeterStudent2();
