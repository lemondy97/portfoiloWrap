const chart1 = document.querySelector('.doughnut1');
const chart2 = document.querySelector('.doughnut2');
const chart3 = document.querySelector('.doughnut3');
const chart4 = document.querySelector('.doughnut4');
const chart5 = document.querySelector('.doughnut5');

const makeChart = (percent, classname, color) => {
  let i = 1;
  let chartFn = setInterval(function() {
    if (i < percent) {
      colorFn(i, classname, color);
      i++;
    } else {
      clearInterval(chartFn);
    }
  }, 25);
}

const colorFn = (i, classname, color) => {
  classname.style.background = "conic-gradient(" + color + " 0% " + i + "%, #dedede " + i + "% 100%)";
}

makeChart(90, chart1, '#FF8200');
makeChart(85, chart2, '#0078FF');
makeChart(75, chart3, '#000057');
makeChart(65, chart4, '#E7C618');
makeChart(60, chart5, '#edacb1');

const replay = () => {
  makeChart(90, chart1, '#FF8200');
  makeChart(85, chart2, '#0078FF');
  makeChart(75, chart3, '#000057');
  makeChart(65, chart4, '#E7C618');
  makeChart(60, chart5, '#edacb1');
}