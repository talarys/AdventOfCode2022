import fs from 'fs';

const lines = fs
  .readFileSync('../inputs/day2.txt')
  .toString('utf-8')
  .split('\n');

let part1 = 0;
let part2 = 0;

for (const line of lines) {
  if (!line) {
    break;
  }

  let [a, b] = line.split(' ');
  a = Number(a.replace('A', '1').replace('B', '2').replace('C', '3'));
  b = Number(b.replace('X', '1').replace('Y', '2').replace('Z', '3'));

  part1 += b + ((b - a + 1 + 3) % 3) * 3;
  part2 += ((a + b) % 3) + 1 + (b - 1) * 3;
}

console.log(part1);
console.log(part2);
