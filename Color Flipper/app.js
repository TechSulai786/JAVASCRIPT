let btn = document.getElementById("btn")

let color = document.getElementById("color")

let wrap = document.getElementById("wrap")

const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click', function () {
    let hexcolor = '#';
    for (let i = 1; i <= 6; i++) {
        hexcolor += randhexvalue()
    }
    wrap.style.backgroundColor = hexcolor
    color.innerHTML = hexcolor;
})

function randhexvalue() {
    let randomindex = Math.floor(Math.random() * 16)
    return hex[randomindex]
}
