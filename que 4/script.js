let MyNumber = document.getElementById("number")
let Myspan = document.getElementById("span")

let count = 1
let n 

n= prompt("Enter Number")

for (let i = 1; i <= 10; i++) {
    console.log( n*i )
    MyNumber.textContent += " " + n*i
    Myspan.textContent = n
}


