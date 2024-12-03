import * as fs from "fs";

const data = fs.readFileSync("/home/raye/Downloads/AdventOfCode/input", "utf8");

const count = [...data.matchAll(/mul\((\d{1,3}),(\d{1,3})\)/g)].map((e) => e[1] * e[2]).reduce((curr, a) => curr + a, 0);

console.log(count);