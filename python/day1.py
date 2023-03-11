input = open("../inputs/day1.txt").readlines()


def parse(lines):
    sums = []
    acc = 0
    for line in lines:
        line = line.strip()
        if line:
            acc += int(line)
        else:
            sums.append(acc)
            acc = 0
    if acc:
        sums.append(acc)
    return sums


def part1(lines):
    return max(parse(lines))


def part2(lines):
    return sum(sorted(parse(lines))[-3:])


print(part1(input))
print(part2(input))
