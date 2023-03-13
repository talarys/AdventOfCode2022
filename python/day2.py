input = open("../inputs/day2.txt").readlines()

p1 = 0
p2 = 0

for a, b in map(lambda x: x.split(), input):
    a = int(a.translate(str.maketrans("ABC", "123")))
    b = int(b.translate(str.maketrans("XYZ", "123")))
    p1 += b + ((b - a + 1) % 3) * 3
    p2 += (a + b) % 3 + 1 + (b - 1) * 3

if __name__ == "__main__":
    print(p1)
    print(p2)
