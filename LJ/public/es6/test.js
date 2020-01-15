'use strict'
// es6 feature: block-scoped "let" declaration
const sentences = [
  { subject: 'Python', verb: 'is', object: 'old hat' },
  { subject: 'Unity', verb: 'is', object: 'neat' }
]
// es6 feature: object destructuring
function say ({ subject, verb, object }) {
  // es6 feature: template strings
  console.log(`${subject} ${verb} ${object}`)
}
// es6 feature: for..of
for (const s of sentences) {
  say(s)
}
