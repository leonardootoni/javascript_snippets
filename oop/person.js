class Person {
  constructor(firstName, lastName, age, likes) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} ${this.lastName} is ${this.age}`;
    this.likes.forEach(like => {
      bio += `\n\t ${this.firstName} likes ${like}.`;
    });

    return bio;
  }

  set fullName(value) {
    const nameData = value.split(" ");
    this.firstName = nameData[0];
    this.lastName = nameData[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setAge(age) {
    this.age = age;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, likes, position) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  //overided method
  getBio() {
    return `${this.fullName} is a ${this.position}`;
  }

  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, likes, grade) {
    super(firstName, lastName, age, likes);
    if (!grade || grade < 0 || grade > 100) {
      throw new Error("Invalid grade. Grande must be a number between 0 and 100.");
    } else {
      this.grade = grade;
    }
  }

  getBio() {
    return this.grade >= 70
      ? `${this.firstName} is passing the course`
      : `${this.firstName} is not passing the course`;
  }

  updateGrade(amount) {
    if (amount > 0) {
      //add
      if (this.grade + amount > 100) {
        throw new Error("Total grade cannot be higher than 100. Reduce the amount before.");
      } else {
        this.grade += amount;
      }
    } else {
      //subtract
      if (!(this.grade - amount)) {
        throw new Error("Total grade cannot be lower than 0. Reduce the amount before.");
      } else {
        this.grade -= -amount;
      }
    }
  }
}

const obj = new Employee("Leo", "Otoni", 40, ["Photograph", "Music"], "Photographer");

//console.log(obj.getBio());
//obj.updateGrade(-35);
obj.fullName = "Leonardo Assis";
//console.log(obj.getBio());
console.log(obj.__proto__.__proto__);
