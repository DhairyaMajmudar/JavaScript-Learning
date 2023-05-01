let MyNumber = document.getElementById("number")
let MySpan = document.getElementById("span")

let n1
let n2
let n3

n1 = prompt("Enter first number")
n2 = prompt("Enter second number")
n3 = prompt("Enter third number")

if (n1 > n2 && n1 > n3) {
    MyNumber.textContent = n1
}

else if(n2 > n1 && n2 > n3){
    MyNumber.textContent = n2
}

else{
    MyNumber.textContent = n3
}




