'use strict'
const s = []
for (let i = 0; i < 10; i++) {
  s.push(i)
}
const randNum = (Math.floor(Math.random() * 20))
console.log(`Trying to remove ${randNum} from array`)
console.log(s)
if (!s.includes(randNum)) {
  console.log(`${randNum} was not found.`)
} else {
  console.log(`${randNum} was found! Removing...`)
  s.splice(s.indexOf(randNum), 1)
}
console.log(s)
