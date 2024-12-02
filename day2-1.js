import * as fs from "fs";

const fileData = fs.readFileSync("/home/raye/Downloads/AdventOfCode/input", "utf8");

const rows = fileData.split("\n").map(e => e.split(" ").map(i => Number(i.trim())));

const safeArrays = rows.filter((e, index) => {

    const dir = e[0] > e[1] ? "down" : "up";

    let check = true;

    e.forEach((i, index) => {
        if(index === 0) {
            return;
        }
        
        const lastIndex = e[index - 1];

        if(dir === "up" ? i < lastIndex : i > lastIndex) {
            check = false;
            return;
        }

        const diff = Math.abs(lastIndex - i);

        if(diff < 1 || diff > 3) {
            check = false;
        }
    });

    return check;
});

console.log(safeArrays.length);