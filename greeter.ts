// interfaces
interface Person {
    firstName: string;
    lastName: String;
    age: number;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.age;
}

let user = { firstName: "Tracey", lastName: "Onim", age: 29 };

document.body.textContent = greeter(user);

// classes + interfaces

class Student {
    fullName: string;
    constructor(public firstName: string, public middleName: string, public lastName: string) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface NewStudent {
    firstName: string;
    middleName: string;
    lastName: string;
    
}

function greeterStudent(student: NewStudent) {
    return "Good morning " + student.firstName + " " + student.middleName + " " + student.lastName;
}
const student = new Student("Tracey", "P", "Onim");

document.body.textContent = greeterStudent(student);
console.log(student.fullName);

function greeterStudent2() {
    const student2 = new Student("Stacy", "P", "Onim");
    return "Good morning " + student2.fullName;
}

document.body.textContent = greeterStudent2();


