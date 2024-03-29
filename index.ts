import {Tiger} from "./Animals/Tiger";
import {Chicken} from "./Animals/Chicken";
import {Apple} from "./Fruits/Apple";
import {Orange} from "./Fruits/Orange";

console.log('---Animals-----')
let animals = []

animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howToEat())
    }
})

console.log('---Fruits-----')
let fruits = []

fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach(item => {
    console.log(item.howToEat())
})