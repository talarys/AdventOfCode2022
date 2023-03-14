from collections import defaultdict
from itertools import accumulate

lines = open("../inputs/day7.txt").read().strip().split("\n")

dirSizes = defaultdict(int)
currPath = []


for line in lines:
    match line.split():
        case "$", "ls":
            continue
        case "dir", _:
            continue
        case "$", "cd", "..":
            currPath.pop()
        case "$", "cd", directory:
            currPath.append(directory)
        case size, _:
            for path in accumulate(currPath, func=lambda a, b: a + "/" + b):
                dirSizes[path] += int(size)


print(sum(size for size in dirSizes.values() if size <= 100_000))
print(min(size for size in dirSizes.values() if size >= dirSizes["/"] - 40_000_000))
