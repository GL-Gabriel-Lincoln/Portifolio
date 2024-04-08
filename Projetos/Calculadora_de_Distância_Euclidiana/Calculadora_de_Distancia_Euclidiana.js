function calculateDistance() {
  var x1 = document.getElementById("x1").value;
  var y1 = document.getElementById("y1").value;
  var x2 = document.getElementById("x2").value;
  var y2 = document.getElementById("y2").value;

  var dx = x2 - x1;
  var dy = y2 - y1;

  var dx2 = Math.pow(dx, 2);
  var dy2 = Math.pow(dy, 2);

  var sum = dx2 + dy2;

  var d = Math.sqrt(sum);
  document.getElementById("resultado").style.display = "inline-block";
  document.getElementById("resultado").innerHTML =
    "Passo a passo do cálculo: <br>" +
    "dx = x2 - x1 = " +
    dx +
    "<br>" +
    "dy = y2 - y1 = " +
    dy +
    "<br>" +
    "dx² = " +
    dx2 +
    "<br>" +
    "dy² = " +
    dy2 +
    "<br>" +
    "soma = dx² + dy² = " +
    sum +
    "<br>" +
    "d(A, B) = √soma = " +
    d;
}
