let MyNumber1 = document.getElementById("number1")
let MyNumber2 = document.getElementById("number2")
let MySpan = document.getElementById("span")
let MySpan1 = document.getElementById("span1")

let n

n = prompt("Enter your no.")

MyNumber1.textContent = n*n
MyNumber2.textContent = n*n*n
MySpan.textContent = n
MySpan1.textContent = n

