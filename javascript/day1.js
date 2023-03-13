import fs from 'fs';

const lines = fs
  .readFileSync('../inputs/day1.txt')
  .toString('utf-8')
  .split('\n');

let n = 1;
let Elves = [0];

for (let line of lines) {
  if (line) {
    Elves[n - 1] += Number(line);
  } else {
    n += 1;
    Elves[n - 1] = 0;
  }
}

const part1 = Math.max(...Elves);
const part2 = Elves.sort()
  .slice(-3)
  .reduce((a, b) => a + b);

console.log(part1);
console.log(part2);
