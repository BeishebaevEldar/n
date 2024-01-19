let main = document.createElement('div')
main.classList.add('main')



let boxGet =function(classname,textcontent,icon,text,classN){
    let p = document.createElement('p')
    p.textContent=text
    p.classList.add(classN)
    let box1 = document.createElement('div')
    box1.classList.add('b')
    let itemtext = document.createElement('div')
    itemtext.classList.add(classname)
    itemtext.append(textcontent)
    let icons = document.createElement('i')
    icons.className=icon
    // box1.classList.add(classname)
    main.append(box1)
    box1.append(itemtext,icons,p)
}


let box1 = boxGet("box","7:25 AM",'fa-solid fa-plane-departure','Boston',"color")
let box2 = boxGet("box","8:15 PM",'fa-solid fa-plane-arrival','Madrid',"color")
let box3 = boxGet("box","Translate",'fa-solid fa-language','English',"color")
let box4 = boxGet("box-yellow","Bike",'fa-solid fa-person-biking','13.1 miles',"color2")
let box5 = boxGet("box-yellow","Boat",'fa-solid fa-ship','90 Minutes',"color2")
let box6 = boxGet("box-yellow","Drive",'fa-solid fa-car','48 Miles',"color2")
let box7 = boxGet("box-red","Morning",'fa-solid fa-mug-saucer','Coffee',"color3")
let box8 = boxGet("box-red","Afternoon",'fa-solid fa-dumbbell','Gym',"color3")
let box9 = boxGet("box-red","Night",'fa-solid fa-hot-tub-person','Hot Tub',"color3")

document.body.append(main)