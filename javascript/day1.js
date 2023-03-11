import fs from 'fs';

const input = fs
  .readFileSync('../inputs/day1.txt')
  .toString('utf-8')
  .split('\n');

const parse = (lines) => {
  const sums = [];
  let acc = 0;

  for (let line of lines) {
    if (line) {
      acc += Number(line);
    } else {
      sums.push(acc);
      acc = 0;
    }
  }

  if (acc) {
    sums.push(acc);
  }

  return sums;
};

const part1 = Math.max(...parse(input));
const part2 = parse(input)
  .sort()
  .slice(-3)
  .reduce((a, b) => a + b);

console.log(part1);
console.log(part2);
