let MyNumber = document.getElementById("number")
let MySpan = document.getElementById("span")

let n

n = prompt("Type the day")

if (n === "sunday" || n ==="saturday") {
    MyNumber.textContent = "Is not a Working Day"
}

else if(n=== "monday" || n==="tuesday"|| n==="wednesday" || n==="thursday" || n==="friday"){
    MyNumber.textContent = "Is a Working Day"

}

MySpan.textContent = n



