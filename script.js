
//initialise count as zero
//listen for counts
//increment count when button is clicked
//change coun-el in html

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0;
 
console.log(saveEl)

function increment() {
  count += 1
  countEl.innerText = count
}


function save() {
  let countStr = count + "-"
  saveEl.innerText += countStr
  console.log(count)
}




