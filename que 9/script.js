let MyNumber = document.getElementById("number")
let Myspan = document.getElementById("span")

// let count = 1

for (let i = 1; i <= 30; i++) {
    if (i%3 === 0) {

        console.log(i)
        MyNumber.textContent += " " + i
    }

}


