// Grade Caculator - Mahamed Ibrahim

// Add an Event Listener

document.getElementById("btn").addEventListener("click", create);

// Store order code inside of a function

function create() {
  // Input

  let r = +document.getElementById("r-in").value;
  let h = +document.getElementById("h-in").value;

  // Process

  let sa = Math.PI * 2 * r ** 2 + Math.PI * 2 * r * h;
  let volume = Math.PI * r ** 2 * h;

  // Output

  document.getElementById("output1").innerHTML = Math.round(sa);
  document.getElementById("output2").innerHTML = Math.round(volume);
}
