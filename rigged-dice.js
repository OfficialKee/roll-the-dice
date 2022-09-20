const prompt = require('prompt-sync')({sigint: true})

console.log(`Let's rig the die!!, We will be using a six-sided die`)

let riggedDie = Number(prompt('Enter a number 1-6. '))

let riggedNumber =(Math.ceil(Math.random()*7))

if (riggedNumber === 7){
    console.log(riggedDie)
} else{
    console.log(riggedNumber)
}

