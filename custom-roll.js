const prompt = require('prompt-sync')({sigint: true})
console.log('We have many sets of dice. All with multiple faces.')
console.log('Which do you prefer?')
let howMany = Number(prompt('Enter the Number   '))
let n = 1

if (howMany > n){
    console.log(`Your roll landed on ${Math.ceil(Math.random()*howMany)}`)
} else if (howMany <= n){
    console.log('Your die must have at least 2 faces!')
}

//console.log('We have many sets of dice. 6 sided, 8 sided 12 sided.')
//console.log('Which do you prefer?')
//let howMany = Number(prompt('Enter the Number   '))
// if (howMany === 6){
//     console.log(`Here's your six-sided roll!`)
//     console.log((Math.ceil(Math.random(0)*6)))
// } else if (howMany === 8){
//     console.log(`Here's your eight-sided roll!`)
//     console.log(Math.ceil(Math.random(0)*8));
// } else if (howMany === 12){
//     console.log(`Here's your twelve-sided roll!`)
//     console.log(Math.ceil(Math.random()*12))
// }

