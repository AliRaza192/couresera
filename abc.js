// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
   sleep() {
       this.energy += 10;
         console.log('Energy is increasing, currently at:', this.energy)
    }
    doSomethingfun() {
        this.energy -= 10;
          console.log('Energy is decreasing, currently at:', this.energy)
    }
}


// Task 2: Code a Worker class
class Worker extends Person {
    constructor(xp, hourlyWage = 10, name, age, energy,) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
        console.log('Experience points is increasing, currently at:', this.xp)
    }

}

// Task 3: Code an intern object, run methods
function intern() {
    interns = new Worker(10, 10, "Bob", 21, 110);
    return interns;
}
console.log(intern());
interns.goToWork()





// Task 4: Code a manager object, methods
function manager() {
    manager1 = new Worker(100, 30, "Alice", 30, 120);
        return manager1;
}
console.log(manager());
