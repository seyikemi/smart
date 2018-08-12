$(document).ready(function() {

  // Today Chart
  var ctx2 = document.getElementById("todayChart").getContext("2d");
  var data2 = {
    labels: ["Jun 1", "Jun 2", "Jun 3", "Jun 4", "Today"],
    datasets: [{
      label: "My First dataset",
      fillColor: "rgb(13, 51, 115)",
      //   strokeColor: "rgba(255,118,118,0.8)",
      highlightFill: "rgb(30, 206, 145)",
      highlightStroke: "rgb(30, 206, 145)",
      data: [1000, 3000, 1200, 2000, 4000]
    }]
  };

  var chart2 = new Chart(ctx2).Bar(data2, {
    scaleBeginAtZero: true,
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.005)",
    scaleGridLineWidth: 0,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines: true,
    barShowStroke: true,
    barStrokeWidth: 0,
    tooltipCornerRadius: 2,
    barDatasetSpacing: 3,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    responsive: true
  });
  // Today Chart

  // Week Chart

  // Week Chart



});
