import fs from 'fs'

const rangePairs = fs
  .readFileSync('../inputs/day4.txt')
  .toString('utf-8')
  .split('\n')
  .filter((l) => l)

const parseRangePair = (rangePair) => {
  const match = rangePair
    .match(/(\d+)-(\d+),(\d+)-(\d+)/)
    .slice(1)
    .map(Number)
  return match
}

const checkContaining = ([start1, end1, start2, end2]) =>
  (start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1)

const checkOverlaping = ([start1, end1, start2, end2]) =>
  Math.max(start1, start2) <= Math.min(end1, end2)

const part1 = rangePairs.map(parseRangePair).filter(checkContaining).length
const part2 = rangePairs.map(parseRangePair).filter(checkOverlaping).length

console.log(part1)
console.log(part2)
