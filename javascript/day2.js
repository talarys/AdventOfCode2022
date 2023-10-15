import fs from 'fs'

const games = fs
  .readFileSync('../inputs/day2.txt')
  .toString('utf-8')
  .split('\n')
  .filter((l) => l)

// Part 1
// ABC XYZ -> ROCK PAPER SCISSOR

const moveValues = { X: 1, Y: 2, Z: 3 }
const gameValues = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
}

const getScoreP1 = (game) => {
  let [op, you] = game.split(' ')
  const moveScore = moveValues[you]
  const gameScore = gameValues[op][you]

  return gameScore + moveScore
}

// Part 2
// X Lose | Y Draw | Z Win

const requiredMoves = {
  A: { X: 'S', Y: 'R', Z: 'P' },
  B: { X: 'R', Y: 'P', Z: 'S' },
  C: { X: 'P', Y: 'S', Z: 'R' },
}
const actualMoveValues = { R: 1, P: 2, S: 3 }
const actualGameValues = { X: 0, Y: 3, Z: 6 }

const getScoreP2 = (game) => {
  let [opMov, outcome] = game.split(' ')
  const yourMove = requiredMoves[opMov][outcome]
  return actualGameValues[outcome] + actualMoveValues[yourMove]
}

const part1 = games.map(getScoreP1).reduce((a, b) => a + b, 0)
const part2 = games.map(getScoreP2).reduce((a, b) => a + b, 0)

console.log(part1)
console.log(part2)
