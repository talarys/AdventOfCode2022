crates, moves = map(
    str.splitlines, open("../inputs/day5.txt").read().rstrip().split("\n\n")
)


def getStack(crates):
    rows = crates[:-1]
    stack = [[] for _ in range(9)]
    for row in reversed(rows):
        i = 0
        for c in row:
            if c.isupper():
                stack[i // 4].append(c)
            i += 1
    return stack


def part1():
    stack = getStack(crates)
    for move in moves:
        n, f, t = map(int, move.split(" ")[1::2])
        for _ in range(n):
            stack[t - 1].append(stack[f - 1].pop())
    return "".join([t.pop() for t in stack])


def part2():
    stack = getStack(crates)
    for move in moves:
        n, f, t = map(int, move.split(" ")[1::2])
        stack[t - 1] += stack[f - 1][-n:]
        stack[f - 1] = stack[f - 1][:-n]
    return "".join([t.pop() for t in stack])


if __name__ == "__main__":
    print(part1())
    print(part2())
