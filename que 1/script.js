let MyNumber = document.getElementById("number")
let MySpan = document.getElementById("span")

let count = 0
let n

n = prompt("enter your no.")

for (let i = 1; i <= n; i++) {
    count += i   
}

console.log(count)

MyNumber.textContent = count
MySpan.textContent = n

