from more_itertools import grouper

lines = open("../inputs/day3.txt").read().strip().split("\n")


def score(c):
    if c.islower():
        return ord(c) - ord("a") + 1
    return ord(c) - ord("A") + 1 + 26


part1 = 0

for line in lines:
    mid = len(line) // 2
    char = set(line[:mid]) & set(line[mid:])
    part1 += score(char.pop())

part2 = 0

for group in grouper(lines, 3):
    part2 += score(set.intersection(*map(set, group)).pop())


if __name__ == "__main__":
    print(part1)
    print(part2)
