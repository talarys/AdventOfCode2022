import fs from 'fs'

const data = fs.readFileSync('../inputs/day6.txt').toString('utf-8')

// Short functional solution but slow
const findUniqueSubstringIndex = (str, wSize, i = 0) =>
  i + wSize <= str.length
    ? new Set(str.slice(i, i + wSize)).size === wSize
      ? i + wSize
      : findUniqueSubstringIndex(str, wSize, i + 1)
    : -1

// Fast as fuck
const fUniqueStringsIndex = (str, wSize) => {
  const charCounts = {}
  let uniqueCount = 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    charCounts[char] = (charCounts[char] ?? 0) + 1

    if (charCounts[char] === 1) {
      uniqueCount++
    }

    if (i >= wSize) {
      const removedChar = str[i - wSize]
      charCounts[removedChar]--
      if (charCounts[removedChar] === 0) uniqueCount--
    }

    if (uniqueCount === wSize) return i + 1
  }

  return -1
}

const part1 = fUniqueStringsIndex(data, 4)
const part2 = fUniqueStringsIndex(data, 14)

console.log(part1)
console.log(part2)
