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



// class Cat extends Animal {
//     static type = "Cat"

//     constructor(options){
//         super(options)
//         this.color = options.color
//     }
//     const cat = new Cat({
//         name: "Cat",
//         age: 7,
//         hasTail: true,
//         color: "black"
//     })
    


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








// class Component {
//     constructor (selector){
//         this.sel = document.querySelector(selector)
//     }

//     hide(){
//         this.sel.style.display = "none"
//     }

//     show(){
//         this.sel.style.display = "block"
//     }
// }

// class Box extends Component {
//     constructor (options){
//         super(options.selector)


//         this.sel.style.width = this.sel.style.height = options.size + "px"
//         this.sel.style.background = options.color 
//     }
// }


// const box1 = new Box({
//     selector: "#box1",
//     size: 100,
//     color: "red"
// })


// const box2 = new Box({
//     selector: "#box2",
//     size: 200,
//     color: "blue"
// })


// class Circle extends Box {
//     constructor (options) {
//         super (options)

//         this.sel.style.borderRadius = "50%"
//     }
// }

// const c = new Circle({
//     selector: "#circle",
//     size: 90,
//     color: "green"
// })



// class Component {
//     constructor (sr){
//         this.sel = document.querySelector(sr)  // this.sel = потрібний нам HTML елемент з відповідним айді (id = "box1")
//     }

//     hide(){
//         this.sel.style.display = "none"
//     }

//     show(){
//         this.sel.style.display = "block"
//     }
// }

// class Box extends Component{
//     constructor(options){           // options тут по факту є змінною = box1, box2 і тд, тобто ключ options по факту передає в класс бокс інформацію про наші змінні(box1, box2 і тд), обираючи "this.sel" ми звертаємось до  відповідного HTML елементу за допомогою квері селектора (document.querySelector(sr))

//         super(options.selector)         // в клас Компонент через метод СУПЕР нам потрібно передати лише 1 значення, це велью selector, тому ми використовуємо такий запис. Після того, як ми передали назву селектору, ми зможемо звертатись до (this.sel.style.width і тд), адже в класі Component строчка this.sel = document.querySelector(sr) зможе обрати в HTML потрібний нам об*єкт з відповідним ID ("#box1", "#box2").
//         this.sel.style.width = this.sel.style.height = options.size + "px"
//         this.sel.style.background = options.color

//     }
// }


// const box1 = new Box({
//     selector: "#box1",      // selector - ця назва ключа передається через (options.selector) в батьківський клас Component, тому якщо в майбутніх нових змінних ця назва зміниться, це пошкодить логіку і код не буде виконуватись, тому назву селектору потрібно стандартувати для всіх подальших екстендів класу
//     // наприклад в box1, box2 назва ключа - selector, в circle назва - selector, якщо в сьоркл цю назву змінити, круг не з'явиться!



//     size: 100,
//     color: "red"
// })

// const box2 = new Box({
//     selector: "#box2",
//     size: 150,
//     color: "blue"
// })

// class Circle extends Box{
//     constructor(options){
//         super(options)
//         this.sel.style.borderRadius = "50%"
//     }

// }
 























// успішно відтворив сам


// const circle = new Circle({
//     selector: "#circle",
//     size: 150,
//     color: "green"
// })


// class Component {
//     constructor (selector){
//         this.sel = document.querySelector(selector)
//     }
// }

// class Box extends Component{
//     constructor (vlad){
//         super(vlad.v)
//         this.sel.style.width = this.sel.style.height = vlad.size + "px"
//         this.sel.style.background = vlad.color
//     }
// }
// const box1 = new Box({
//     v: "#box1",
//     size: 100,
//     color: "green"
// })

// class Circle extends Box{
//     constructor(juli){
//         super(juli)
//         this.sel.style.borderRadius = "50%"
//     }
// }
// const ci = new Circle({
//     v: "#circle",
//     size: 100,
//     color: "yellow"
// })








        //спробував сам створити клас і розширити



// class Animal {
//     constructor(value){
//         this.name = value.name,
//         this.age = value.age,
//         this.color = value.color
//     }
// }


//  class Cat extends Animal{
//      constructor(vl){
//          super(vl)
//          this.tail = vl.tail

//      }
//  }

// const cat = new Cat({
//     name: "Leopold",
//     age: 3,
//     color: "white",
//     tail: "Yep!"
// })