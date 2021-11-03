const priceTabs = document.querySelectorAll(".price__tab-btn");
const priceItems = document.querySelectorAll(".price__right-item");

const priceRightTabs = document.querySelectorAll(".price__right-tab");
const priceRightItems = document.querySelectorAll(".price__right-content");

if (priceTabs) {
   priceTabs.forEach(function (item) {
      item.addEventListener("click", function () {
         let currentBtn = item;
         let tabId = currentBtn.getAttribute("data-tab");
         let currentTab = document.querySelector(tabId);

         if (!currentBtn.classList.contains('active')) {
            priceTabs.forEach(function (item) {
               item.classList.remove('active');
            });

            priceItems.forEach(function (item) {
               item.classList.remove('active');
            })

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
         }
      });
   });
}

priceRightTabs.forEach(function (item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains('active')) {
         priceRightTabs.forEach(function (item) {
            item.classList.remove('active');
         });
         priceRightItems.forEach(function (item) {
            item.classList.remove('active');
         })
         currentBtn.classList.add('active');
         currentTab.classList.add('active');
      }
   });
});

/*1111111111111111111111111111111111111111111111111111111 GRAFIK */


let gold585Canvas = document.getElementById("gold585Chart");
let ctx = gold585Canvas.getContext('2d');
let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0.01)');
// Chart.defaults.global.defaultFontFamily = "Lato";
// Chart.defaults.global.defaultFontSize = 18;
// let goldData = [2100, 2130, 2120, 2150, 2200, 2205, 2190, 2150, 2250, 2290, 2300, 2400];
let goldData = [];
for (var i = 0, l = 12; i < l; i++) {
   goldData.push(Math.round(Math.random() * (2400 - 2000) + 2000))
};

let gold585Data = {
   labels: ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07", "01.08", "01.09", "01.10", "01.11", "01.12"],
   datasets: [{

      data: goldData,
      backgroundColor: gradient,
      lineTension: 0,
      borderColor: 'white',
      fill: true,
      pointRadius: 6,
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
   }]
};

let chartOptions = {
   plugins: {
      legend: {
         display: false,
      },
   },

   scales: {
      x: {
         grid: {
            display: false
         },
         ticks: {
            display: false,
         }
      },
      y: {
         grid: {
            display: false
         },
         ticks: {
            display: false,
         }
      },
   }
};

let lineChart = new Chart(gold585Canvas, {
   type: 'line',
   data: gold585Data,
   options: chartOptions

});




/*222222222222222222222222222222222222222222*/


let gold999Canvas = document.getElementById("gold999Chart");
let gold999DataDots = [];
for (var i = 0, l = 12; i < l; i++) {
   gold999DataDots.push(Math.round(Math.random() * (4100 - 3500) + 3500))
};

let gold999Data = {
   labels: ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07", "01.08", "01.09", "01.10", "01.11", "01.12"],
   datasets: [{

      data: gold999DataDots,
      backgroundColor: gradient,
      lineTension: 0,
      borderColor: 'white',
      fill: true,
      pointRadius: 6,
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
   }]
};


let lineChartGold999 = new Chart(gold999Canvas, {
   type: 'line',
   data: gold999Data,
   options: chartOptions

});
/*333333333333333333333333333333333333333333333333*/

let silverCanvas = document.getElementById("silverChart");
let silverDataDots = [];
for (var i = 0, l = 12; i < l; i++) {
   silverDataDots.push(Math.round(Math.random() * (70 - 20) + 20))
};

let silverData = {
   labels: ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06", "01.07", "01.08", "01.09", "01.10", "01.11", "01.12"],
   datasets: [{

      data: silverDataDots,
      backgroundColor: gradient,
      lineTension: 0,
      borderColor: 'white',
      fill: true,
      pointRadius: 6,
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
   }]
};


let lineChartSilver = new Chart(silverCanvas, {
   type: 'line',
   data: silverData,
   options: chartOptions

});


