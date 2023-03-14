google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
// Set Data
var data = google.visualization.arrayToDataTable([
  ['Price', 'Size'],
  [50,7],[60,8],[70,8],[80,9],[90,9],
  [100,9],[110,10],[120,11],
  [130,14],[140,14],[150,15]
]);
var data2 = google.visualization.arrayToDataTable([
    ['Contry', 'Mhl'],
    ['India',54.8],
    ['France',48.6],
    ['Spain',44.4],
    ['USA',23.9],
    ['Argentina',14.5]
  ]);
// Set Options
var options = {
  title: 'House Prices vs. Size',
  hAxis: {title: 'Square Meters'},
  vAxis: {title: 'Price in Millions'},
  legend: 'none'
};
var options2 = {
    title:'World Wide Wine Production'
  };

  var options3 = {
    title: "'World Wide Wine Production",
    pieHole: 0.35,
    pieSliceBorderColor: "none",
 colors: ['#067ab5', '#3aa5dd', '#eaeaea' ],
    legend: {
        position: "%"	
    },
    pieSliceText: Number,
    tooltip: {
        trigger: "none"
    }
};

// Draw
var chart = new google.visualization.ScatterChart(document.getElementById('myChart'));
chart.draw(data, options);
var chart = new google.visualization.LineChart(document.getElementById('myChart2'));
chart.draw(data, options);
var chart = new google.visualization.BarChart(document.getElementById('myChart3'));
chart.draw(data, options);
var chart = new google.visualization.AreaChart(document.getElementById('myChart4'));
chart.draw(data, options);
var chart = new google.visualization.PieChart(document.getElementById('myChart5'));
chart.draw(data2, options2);
// Donut chart
var chart = new google.visualization.PieChart(document.getElementById('myChart6'));
chart.draw(data2, options3);
}

