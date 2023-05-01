let MyNumber = document.getElementById("number")
let Myspan = document.getElementById("span")

let count = 1
let n 

n = prompt("Enter Number")

for (let i = 1; i <= n; i++) {
    if (i%2 === 0) {

        console.log(i)
        MyNumber.textContent += " " + i
    }
    Myspan.textContent = n
}


