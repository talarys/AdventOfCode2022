import fs from 'fs'

const [crates, moves] = fs
  .readFileSync('../inputs/day5.txt')
  .toString('utf-8')
  .split('\n\n')

// Split based on linebreak
const stackRows = crates.split('\n').slice(0, -1)
// Cleanup by taking every 4th char
const stackMatrix = stackRows.map((row) =>
  [...row].filter((_, i) => i % 4 === 1)
)

// Empty matrix to fill
const stacks = Array(stackMatrix[0].length).fill('')

// Transposing the matrix
for (let i = 0; i < stackMatrix.length; i++) {
  for (let j = 0; j < stackMatrix[0].length; j++) {
    const char = stackMatrix[i][j]
    if (char !== ' ') {
      stacks[j] += char
    }
  }
}

const reverse = (str) => [...str].reverse().join('')

const moveCrate = (stacks, amount, from, to) => {
  return stacks.map((stack, i) =>
    i === from - 1
      ? stack.slice(amount)
      : i === to - 1
      ? reverse(stacks[from - 1].slice(0, amount)) + stack
      : stack
  )
}

const moveCrates = (stacks, amount, from, to) => {
  return stacks.map((stack, i) =>
    i === from - 1
      ? stack.slice(amount)
      : i === to - 1
      ? stacks[from - 1].slice(0, amount) + stack
      : stack
  )
}

const parseMove = (move) =>
  move
    .split(' ')
    .filter((_, i) => i % 2 !== 0)
    .map(Number)

const intructions = moves.split('\n').slice(0, -1).map(parseMove)

const finalStacks1 = intructions.reduce(
  (stacks, [amount, from, to]) => moveCrate(stacks, amount, from, to),
  stacks
)

const finalStacks2 = intructions.reduce(
  (stacks, [amount, from, to]) => moveCrates(stacks, amount, from, to),
  stacks
)
const part1 = finalStacks1.map((stack) => stack[0]).join('')
const part2 = finalStacks2.map((stack) => stack[0]).join('')

console.log(part1)
console.log(part2)
