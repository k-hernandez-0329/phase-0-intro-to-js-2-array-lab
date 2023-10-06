// Write your solution here!
const cats = ["Milo","Otis","Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
    
console.log(cats)
console.log(destructivelyAppendCat)

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
console.log(destructivelyPrependCat)

function destructivelyRemoveLastCat(){
    cats.pop()

}
console.log(destructivelyRemoveLastCat)

function destructivelyRemoveFirstCat(){
    cats.shift()
}
console.log(destructivelyRemoveFirstCat)

function appendCat(name){
    const copyOfCats = [...cats.slice(),
    "Broom"
    ]
    return copyOfCats
}
console.log(appendCat)

function prependCat(name){
    const allCats = ["Arnold",
    ...cats.slice()
]
    return allCats
}
console.log(prependCat)

function removeLastCat(){
    const minusCats = [...cats.slice(0, 2)]
    return minusCats
}
console.log(removeLastCat)

function removeFirstCat(){
    const lessCat = [...cats.slice(1)]
    return lessCat
}
console.log(removeFirstCat)