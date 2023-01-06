"use strict";
exports.__esModule = true;
var node_fs_1 = require("node:fs");
var inputLines = (0, node_fs_1.readFileSync)("./input.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n \n");
console.log(inputLines);
