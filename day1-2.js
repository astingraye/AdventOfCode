import * as fs from "fs";

const fileData = fs.readFileSync("/home/raye/Downloads/aoc/data", "utf8");

const sortToArrays = fileData.split("\n").map(e => e.split("   ")).map(e => e.map(i => Number(i)));

const l = sortToArrays.map(e => e[0]);

const r = sortToArrays.map(e => e[1]);

let similarity = 0;

l.forEach(e => {
    const similarNumbers = r.filter(i => i === e);

    similarity += similarNumbers.length * e;
});

console.log(similarity);