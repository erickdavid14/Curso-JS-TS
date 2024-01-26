let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
let varD = 'D'; //B

const varATemp = varA;
const varCTemp = varC;
varA = varB;
varB = varC;
varC = varATemp;
varD = varCTemp;

console.log(varA, varB, varC, )


