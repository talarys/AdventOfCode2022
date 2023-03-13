lines = open("../inputs/day4.txt").read().strip().split("\n")

part1 = 0
part2 = 0

for line in lines:
    a, b = line.split(",")
    ao, af = map(int, a.split("-"))
    bo, bf = map(int, b.split("-"))

    if (ao <= bo and af >= bf) or (bo <= ao and bf >= af):
        part1 += 1

    if max(ao, bo) <= min(af, bf):
        part2 += 1

if __name__ == "__main__":
    print(part1)
    print(part2)
