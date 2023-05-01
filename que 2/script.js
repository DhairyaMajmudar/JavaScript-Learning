let MyNumber = document.getElementById("number")
let MySpan1 = document.getElementById("span1")
let MySpan2 = document.getElementById("span2")

let count = 0
let n1 
let n2

n1 = prompt("Enter first no.")
n2 = prompt("Enter second no.")

for (let i = n1; i <= n2; i++) {
    count += i   
    MyNumber.textContent = " " + count
}

console.log(count)

MySpan1.textContent = n1
MySpan2.textContent = n2

