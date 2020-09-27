console.log('SCRIPT START')

console.log('Declare testable functions......................')

function myFunction () {
     var side1 = document.getElementById("txt1").value;
     var side2 = document.getElementById("txt2").value;
     var side3 = document.getElementById("txt3").value;
    console.log('all the sides values are entered as :'+side1,+side2,+side3 );
    var s =(+side1 + +side2 + +side3)/2;
    var area = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
    console.log('Area calculated as :' +area);
    document.getElementById("calc").innerHTML = area;
}

console.log('Defined area calc=' + myFunction)

console.log('Declare event listeners .......................')

window.addEventListener('load', (event) => {
  console.log('  Starting initialization ')
  if (localStorage.getItem('txt1')) {
    document.getElementById('txt1').value = parseInt(localStorage.txt1)
    console.log(`  Stored txt1 = ${localStorage.txt1}`)
  }
  if (localStorage.getItem('txt2')) {
    document.getElementById('txt2').value = parseInt(localStorage.txt2)
    console.log(`  Stored txt2 = ${localStorage.txt2}`)
  }
  if (localStorage.getItem('txt3')) {
    document.getElementById('txt3').value = parseInt(localStorage.txt3)
    console.log(`  Stored txt3 = ${localStorage.txt3}`)
  }
  console.log('  Finished initialization')
})

document.getElementById('clicker').addEventListener('click', () => {
  console.log('  Starting clicker click handler')
  const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
  const s = parseInt(document.getElementById('txt1').value)
  console.log('s=' + s)
  const i = parseInt(document.getElementById('txt2').value)
  console.log('i=' + i)
  const j = parseInt(document.getElementById('txt3').value)
  console.log('j=' + j)
  const ct = origCount + 1
  const ans = ' Area for triangle has been run ' + ct + ' times.'
  document.getElementById('result').innerHTML = ans
  localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
  localStorage.setItem('txt1', s)
  localStorage.setItem('txt2', i)
  localStorage.setItem('txt3', j)
  console.log('  Finished clicker click handler')
})

document.getElementById('wiper').addEventListener('click', () => {
  console.log('  Starting wiper click handler')
  localStorage.removeItem('countOfClicks')
  localStorage.removeItem('txt1')
  localStorage.removeItem('txt2')
  localStorage.removeItem('txt3')
  console.log('  Finished wiper click handler - localStorage entries removed')
})

console.log('SCRIPT END')
