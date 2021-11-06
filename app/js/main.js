const priceTabs = document.querySelectorAll(".price__tab-btn");
const priceItems = document.querySelectorAll(".price__right-item");

const priceRightTabs = document.querySelectorAll(".price__right-tab");
const priceRightItems = document.querySelectorAll(".price__right-content");
// const goldBox = document.querySelectorAll(".price__right-tab-box");
// const goldTab = goldBox.querySelector("button");

if (priceTabs) {
   priceTabs.forEach(function (item) {
      item.addEventListener("click", function () {
         let currentBtn = item;
         let tabId = currentBtn.getAttribute("data-tab");
         let currentTab = document.querySelector(tabId);
         // let goldTab = currentTab.querySelector('button');
         // let goldContent = currentTab.querySelector('.price__right-content');



         if (!currentBtn.classList.contains('active')) {
            priceTabs.forEach(function (item) {
               item.classList.remove('active');
            });

            priceItems.forEach(function (item) {
               item.classList.remove('active');
            });


            currentBtn.classList.add('active');
            currentTab.classList.add('active');
            // goldTab.classList.add('active');
            // goldContent.classList.add('active');


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
   // console.log(goldData[11])
};
// document.querySelectorAll('.graphics__top-price')[0].firstChild.innerHTML = goldData[11];
// console.log(document.querySelectorAll('.graphics__top-price')[0].firstChild.innerHTML)


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

   animation: {
      duration: 3000
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

// document.querySelectorAll('.graphics__top-price')[1].firstChild.innerHTML = gold999DataDots[11];


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
// document.querySelectorAll('.graphics__top-price')[2].firstChild.innerHTML = silverDataDots[11];

// document.querySelectorAll('.graphics__top-price p:nth-child(2)').innerHTML = goldData[11];
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


/*SELLSELLSELLSELLSELLSELLSELLSELLSELLSELLSELLSELLSELLSELL*/
// var table = document.getElementById("tableId");
// var rows = table.getElementsByTagName("tr");


// rows.forEach(function (item) {
//    item.addEventListener("click", function () {
//       console.log('sdfsdf')
//    }
//    );
// });

// function showSell() {
//    let typeLeft = document.querySelector('.sell__form-type')
//    let typeRight = document.querySelectorAll('.sell__right-type')
//    typeLeft.value = typeRight.innerHTML
// }

// function rowClick() {
//    const table = document.getElementById('table');
//    const typeLeft = document.querySelector('.sell__form-type')
//    const tableRow = document.querySelectorAll('.sell__right-tablerow')


//    for (let i = 1; i < tableRow.length; i++) {
//       tableRow[i] = function () {
//          document.querySelector('.sell__form-type').value
//       }
//    }
// }

let rows = document.getElementsByClassName("sell__right-tablerow")
if (rows) {
   for (var i = 1, len = rows.length; i < len; i++) {

      rows[i].addEventListener('click', set_handler(i));
   }

   function set_handler(i) {
      return function (e) {
         const cell = rows[i].getElementsByTagName("td")[0].innerHTML
         document.getElementById("sellType").value = cell;
         document.getElementsByClassName('sell__left-item')[1].classList.remove('active');

         document.getElementsByClassName('sell__left-item')[0].classList.add('active');
      };
   }
}

let silverRows = document.getElementsByClassName("silver__right-tablerow")
if (silverRows) {
   for (var i = 1, len = silverRows.length; i < len; i++) {

      silverRows[i].addEventListener('click', set_handler(i));
   }

   function set_handler(i) {
      return function (e) {
         const cell = silverRows[i].getElementsByTagName("td")[0].innerHTML
         document.getElementById("sellType").value = cell;
         document.getElementsByClassName('sell__left-item')[0].classList.remove('active');

         document.getElementsByClassName('sell__left-item')[1].classList.add('active');
      };
   }
}

// function addRowHandlers(e) {


//    var cell = document.getElementsByTagName("td")[0];
//    console.log(cell);
//    var id = cell.innerHTML;
//    console.log(document.getElementById("sellType"));
//    document.getElementById("sellType").value = id;
//    // document.getElementsByClassName('sell__left-item')[1].classList.remove('active');

//    document.getElementsByClassName('sell__left-item')[0].classList.add('active');


// }

// function addSilverRowHandlers() {
//    var table = document.getElementById("silverTable");
//    var rows = table.getElementsByTagName("tr");


//    for (i = 1; i < rows.length; i++) {
//       var currentRow = table.rows[i];
//       var createClickHandler =
//          function (row) {
//             return function () {
//                var cell = row.getElementsByTagName("td")[0];
//                var id = cell.innerHTML;
//                document.getElementById("sellType").value = id;
//                document.getElementsByClassName('sell__left-item')[0].classList.remove('active');

//                document.getElementsByClassName('sell__left-item')[1].classList.add('active');

//             };
//          };

//       currentRow.onclick = createClickHandler(currentRow);
//    }
// }

setTimeout(function () {

   odometer1.innerHTML = goldData[11];
   odometer2.innerHTML = gold999DataDots[11];
   odometer3.innerHTML = silverDataDots[11];
   //document.querySelectorAll('.graphics__top-price')[0].firstChild.innerHTML = goldData[11];

}, 100);

window.odometerOptions = {
   format: 'd',
}



const myModal = new HystModal({
   linkAttributeName: "data-hystmodal",
   //настройки, см. API
});