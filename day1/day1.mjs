import { readFileSync } from "node:fs";

const inputLines = readFileSync("./input.txt", { encoding: "utf-8" })
.replace(/\r/g, "")
.trim()
.split("\n\n");

console.log(inputLines);