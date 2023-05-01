let MyNumber = document.getElementById("number")
let MySpan = document.getElementById("span")

let n
let count = 0

n = prompt("enter your no.")

for (let i = 1; i <= n; i++) {
    count += i   
}

MyNumber.textContent = count

MySpan.textContent = n

