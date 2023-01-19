import { readFileSync } from "node:fs";
import internal from "node:stream";

const inputLines = readFileSync("./input.txt", { encoding: "utf-8" })
.replace(/\r/g, "")
.trim()
.split("\n\n");


const totalCaloriesForEachElf = inputLines.map((caloriesForElfString) => { 
    const eachElfsSnackage = caloriesForElfString.split("\n").map((snackString) => parseInt(snackString.trim()));
    return eachElfsSnackage.reduce((previous, current) => previous + current, 0);
});

const mostCalorificSnackage = Math.max(...totalCaloriesForEachElf);
console.log(mostCalorificSnackage);
