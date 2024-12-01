import * as fs from "fs";

const fileData = fs.readFileSync("/home/raye/Downloads/aoc/data", "utf8");

const sortToArrays = fileData.split("\n").map(e => e.split("   ")).map(e => e.map(i => Number(i)));

const totalDistance = sortToArrays.map(e => e[0]).sort((i, o) => i - o).map((l, index) => {
    const r = sortToArrays.map(e => e[1]).sort((i, o) => i - o)[index];

    const biggest = l > r ? l : r;

    const smallest = l < r ? l : r;

    return biggest - smallest;
}).reduce((acc, curr) => acc + curr);

console.log(totalDistance);