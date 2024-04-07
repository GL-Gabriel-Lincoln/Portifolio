function findMax() {
  var input = document.getElementById("myInput").value;

  var array = [];
  var temp = "";

  for (var i = 0; i < input.length; i++) {
    if (input[i] != ",") {
      temp += input[i];
    }

    if (input[i] == "," || i == input.length - 1) {
      array.push(Number(temp));
      temp = "";
    }
  }

  var max = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  document.getElementById("result").style.display = "inline-block";
  document.getElementById("result").innerHTML = "O maior valor é: " + max;
}