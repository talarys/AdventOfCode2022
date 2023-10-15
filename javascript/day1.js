import fs from 'fs'

const groups = fs
  .readFileSync('../inputs/day1.txt')
  .toString('utf-8')
  .split('\n\n')

const getSumOfGroup = (group) =>
  group
    .split('\n')
    .map(Number)
    .reduce((sum, num) => sum + num, 0)

const sortedGroupSums = groups.map(getSumOfGroup).sort((a, b) => b - a)

const part1 = sortedGroupSums[0]
const part2 = sortedGroupSums.slice(0, 3).reduce((a, b) => a + b, 0)

console.log(part1)
console.log(part2)
