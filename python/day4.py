lines = open("../inputs/day4.txt").read().strip().split("\n")

part1 = 0
part2 = 0

for line in lines:
    a, b = line.split(",")
    start1, end1 = map(int, a.split("-"))
    start2, end2 = map(int, b.split("-"))

    if (start1 <= start2 and end1 >= end2) or (start2 <= start1 and end2 >= end1):
        part1 += 1

    if max(start1, start2) <= min(end1, end2):
        part2 += 1

if __name__ == "__main__":
    print(part1)
    print(part2)
