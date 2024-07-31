class Dog {
    //Property
    name = ""
    color = ""

    //Special Method
    constructor (name, color) { 
        this.name = name
        this.color = color

    }


    //Method
    sit() {
        console.log(`${this.name} berwarna ${this.color}`)
    }

    // layDown() {


    // }

    // shake() {


    // }

    // come() {


    // }
}

const dwiky = new Dog ("dwiky", "Blue")
dwiky.sit()
