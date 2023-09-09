const button = document.getElementById('myButton')

button.addEventListener('click',displaystatus)
function displaystatus()
{
    
    let input = document.getElementById("input")
    let city = input.options[input.selectedIndex].value
    console.log(city)
}
