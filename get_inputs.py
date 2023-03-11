import requests
from cookie import cookie

# cookie = {
#     "session": ""
# }

session = requests.Session()
session.cookies.update(cookie)

for day in range(1, 26):
    res = session.get(f"https://adventofcode.com/2022/day/{day}/input")
    open(f"./inputs/day{day}.txt", "w+").write(res.text)
