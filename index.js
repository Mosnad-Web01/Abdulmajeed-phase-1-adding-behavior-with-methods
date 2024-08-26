// Your code here
class Bird {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
    speak() {
        return `${this.name} says squawk!`
    }
}
class Cat extends Bird {
    speak() {
        return `${this.name} says meow!`
    }
}
class Dog extends Bird {
    speak() {
        return `${this.name} says woof!`
    }
}
