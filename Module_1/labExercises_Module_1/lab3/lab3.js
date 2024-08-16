function button1() {
  document.getElementById("column1").style.backgroundColor = "blue";
  document.getElementById("heading1").innerText = " The Text Has Changed";
  let text = document.getElementById("input1").value;
  document.getElementById("button1").innerText = text;
}

function button2() {
  document.getElementById("column2").style.backgroundColor = "Green";
  document.getElementById("heading2").innerText = " The Text Has Changed";
  let text = document.getElementById("input2").value;
  document.getElementById("button2").innerText = text;
}
