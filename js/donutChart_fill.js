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

makeChart(90, chart1, '#f5b914');
makeChart(85, chart2, '#b428b4');
makeChart(75, chart3, '#66d2ce');
makeChart(65, chart4, '#98fb98');
makeChart(60, chart5, '#CD2E57');

const replay = () => {
  makeChart(90, chart1, '#f5b914');
  makeChart(85, chart2, '#b428b4');
  makeChart(75, chart3, '#66d2ce');
  makeChart(65, chart4, '#98fb98');
  makeChart(60, chart5, '#CD2E57');
}