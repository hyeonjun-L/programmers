let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString())
answer = []
for(let i = input; i >= 1 ; i--){
    answer[answer.length] = i
}

console.log(answer.join('\n'))