class Animal {
    brain = true
    legn = 0
    
    angry () {
        console.log("angry");
    }
}

class Human extends Animal {
    legn = 2
    talk () {
        console.log("talk");
    }
}

class Pet extends Animal {
    legn = 4
    fleas = 0
}

class Dog extends Pet {
    fleas = 7
}

class Cat extends Pet {
    fleas = 4
}

const animal = new Animal ()
animal.angry ()

const human = new Human ()
human.talk ()
human.angry ()