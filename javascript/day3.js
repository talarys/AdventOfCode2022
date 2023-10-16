import fs from 'fs'

const rucksacks = fs
  .readFileSync('../inputs/day3.txt')
  .toString('utf-8')
  .split('\n')
  .filter((l) => l)

// Part 1
const getItemPriority = (i) => i.charCodeAt() - (/[a-z]/.test(i) ? 96 : 38)

const findCommonItem = (sack) => {
  const mid = sack.length / 2

  const first = new Set(sack.slice(0, mid))
  const second = new Set(sack.slice(mid))

  return [...first].find((i) => second.has(i))
}

const part1 = rucksacks
  .map(findCommonItem)
  .map(getItemPriority)
  .reduce((a, b) => a + b, 0)

// Part 2
const getGroupOf3 = (arr) =>
  arr.length ? [arr.slice(0, 3), ...getGroupOf3(arr.slice(3))] : []

const findCommonItemGroupOf3 = ([x, y, z]) => {
  const a = new Set(x)
  const b = new Set(y)
  const c = new Set(z)

  return [...a].find((i) => b.has(i) && c.has(i))
}

const part2 = getGroupOf3(rucksacks)
  .map(findCommonItemGroupOf3)
  .map(getItemPriority)
  .reduce((a, b) => a + b, 0)

console.log(part1)
console.log(part2)
