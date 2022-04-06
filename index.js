// const animal = {
//     name : "Animal",
//     age : 5,
//     hasTail : true
// }

// class Animal {

//     static type = "Animal"

//     constructor(options){
//         this.name = options.name,
//         this.age = options.age,
//         this.hasTail = options.hasTail
//     }


//     voice (){
//         console.log("I am animal!")
//     }
// }

// const animal = new Animal ({
//     name: "Animal",
//     age: 5,
//     hasTail: true
// })


// class Cat extends Animal {
//     static type = "Cat"

//     constructor(options){
//         super(options)
//         this.color = options.color
//     }

//     voice(){
//         super.voice()                       // цей рядок збереже батьківську функцію, вони будуть викликані обидві за допомогою voice()
//         console.log("I am cat!")           // якщо залишити тільки цей рядок, то батьківський метод буде переписаний
//     }
    
//     get ageInfo(){
//         return this.age * 7                 // цей гетер вираховує вік кота в котячих роках
//     }

//     set ageInfo(newAge){
//         this.age = newAge                   // цей сетер переписує значення аге кота
//     }
// }


// const cat = new Cat({
//     name: "Cat",
//     age: 7,
//     hasTail: true,
//     color: "black"
// })

// cat.ageInfo = 3
// cat.ageInfo








class Component {
    constructor (selector){
        this.sel = document.querySelector(selector)
    }

    hide(){
        this.sel.style.display = "none"
    }

    show(){
        this.sel.style.display = "block"
    }
}

class Box extends Component {
    constructor (options){
        super(options.selector)


        this.sel.style.width = this.sel.style.height = options.size + "px"
        this.sel.style.background = options.color 
    }
}


const box1 = new Box({
    selector: "#box1",
    size: 100,
    color: "red"
})


const box2 = new Box({
    selector: "#box2",
    size: 200,
    color: "blue"
})


class Circle extends Box {
    constructor (options) {
        super (options)

        this.sel.style.borderRadius = "50%"
    }
}

const c = new Circle({
    selector: "#circle",
    size: 90,
    color: "green"
})