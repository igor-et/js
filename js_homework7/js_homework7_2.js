"use strict";

const text = "Happiness Wonderful Joyful 123456a TesTqA Time Task Apple quuqTEsT _Resb 12345l67 t ime1";
const reg = /\b[^Aa\s]{6,}\b/g;
const validData = text.match(reg);
console.log("валідні => " + validData)