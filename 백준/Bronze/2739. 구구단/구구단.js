let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString())
answer = []
for(let i = 1; i<10; i++){
    answer[answer.length] = input +' * '+i+' = '+i*input
}

console.log(answer.join('\n'))