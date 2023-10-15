input = open("../inputs/day1.txt").readlines()

n, Elves = 0, [0]

for line in map(lambda x: x.strip(), input):
    if line:
        Elves[n] += int(line)
    else:
        n, Elves = n + 1, Elves + [0]


def part1():
    return max(Elves)


def part2():
    return sum(sorted(Elves)[-3:])


if __name__ == "__main__":
    print(part1())
    print(part2())
