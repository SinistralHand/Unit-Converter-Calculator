/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")



btnEl.addEventListener("click", function(){
    let number = inputEl.value    
    lengthEl.textContent = `${number} meter = ${(number * 3.281).toFixed(3)} feet | ${number} feet = ${(number * 0.30478512648).toFixed(3)} meter`
    volumeEl.textContent = `${number} liter = ${(number * 0.264).toFixed(3)} gallon | ${number} gallon = ${(number*3.78787878788).toFixed(3)} liter`
    massEl.textContent = `${number} kilogram = ${(number * 2.204).toFixed(3)} pound | ${number} pound = ${(number*0.45372050816).toFixed(3)} kilogram`
})