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


def part1():
    return max(parse(input))


def part2():
    return sum(sorted(parse(input))[-3:])



if __name__ == '__main__':
    print(part1())
    print(part2())