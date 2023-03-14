data = open("../inputs/day6.txt").read().strip().split("\n")[0]


def nuniques(xs, n):
    for i in range(n, len(xs)):
        if len(set(xs[i - n : i])) == n:
            return i


print(nuniques(data, 4))
print(nuniques(data, 14))
