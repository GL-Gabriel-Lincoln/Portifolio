var points = [];
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  type: "scatter",
  data: {
    datasets: [
      {
        label: "Pontos do Usuário",
        data: points,
        backgroundColor: "rgba(0, 102, 255, 0.749", // cor de fundo dos pontos
        borderColor: "rgb(85, 153, 255)", // cor da borda dos pontos
        borderWidth: 1,
        pointRadius: 10, // tamanho dos pontos
      },
    ],
  },
  options: {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        grid: {
          color: "rgb(255, 255, 255)", // cor das linhas de grade
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        type: "linear",
        position: "bottom",

        grid: {
          color: "rgb(255, 255, 255)", // cor das linhas de grade
        },
        ticks: {
          color: "white",
        },
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  },
});

function addPoint() {
  var xValue = document.getElementById("x").value;
  var yValue = document.getElementById("y").value;
  points.push({ x: xValue, y: yValue });
  chart.update();
}

function clearPoints() {
  points.length = 0;
  chart.update();
}