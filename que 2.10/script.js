let MyNumber = document.getElementById("number")
let MySpan = document.getElementById("span")

let n

n = prompt("Enter your number")

if (n>0) {
    MyNumber.textContent = "is a positive number "
}

else if(n<0){
    MyNumber.textContent = "is a negative number"
}

else{
    MyNumber.textContent = "is a zero"
}

MySpan.textContent = n



