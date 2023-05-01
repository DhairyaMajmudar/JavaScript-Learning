let MyNumber = document.getElementById("number")
let Myspan1 = document.getElementById("span1")
let Myspan2 = document.getElementById("span2")

let n1 
let n2 

n1 = prompt("Enter Number 1")
n2 = prompt("Enter Number 2")

for (let i = n1; i <= n2; i++) {
    if (i%2 != 0) {

        console.log(i)
        MyNumber.textContent += " " + i
    }
    Myspan2.textContent = n2 
    Myspan1.textContent = n1 
}


