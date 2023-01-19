import { readFileSync } from "node:fs";
import internal from "node:stream";

const inputLines = readFileSync("./input.txt", { encoding: "utf-8" })
.replace(/\r/g, "")
.trim()
.split("\n\n");


const totalCaloriesForEachElf = inputLines.map((caloriesForElfString) => { 
    const eachElfsSnackage = caloriesForElfString.split("\n").map((snackString) => parseInt(snackString.trim()));
    return getTotalCaloriesFromArrayOfSnacks(eachElfsSnackage);
});

// pt1 the elf with the most calories available
const mostCalorificSnackage = Math.max(...totalCaloriesForEachElf);

// pt2 the top and bottom three snack hoarders

function getBottomThreeSnackers(allElvesTotalCalories){
    const sortedSnacksAscending = allElvesTotalCalories.sort((oneSnack, anotherSnack) => oneSnack - anotherSnack);
    const bottomThreeSnackers = sortedSnacksAscending.slice(0, 3);
    return bottomThreeSnackers;
}

function getTopThreeSnackers(allElvesTotalCalories){
    const sortedSnacksDescending = allElvesTotalCalories.sort((oneSnack, anotherSnack) => anotherSnack - oneSnack);
    const topThreeSnackers = sortedSnacksDescending.slice(0, 3);
    return topThreeSnackers;
}

function getTotalCaloriesFromArrayOfSnacks(arrayOfSnacks){
    return arrayOfSnacks.reduce((previous, current) => previous + current);
}

console.log(mostCalorificSnackage);
console.log(getBottomThreeSnackers(totalCaloriesForEachElf));
console.log(getTopThreeSnackers(totalCaloriesForEachElf));
console.log(getTotalCaloriesFromArrayOfSnacks(getTopThreeSnackers(totalCaloriesForEachElf)));
