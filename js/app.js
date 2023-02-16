'use strict';

function randomSale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allLocations = [];
let table = document.querySelector('table');
let grandTotal = 0



function LocatSales (name, maxCust, minCust, avgCookieSale){
  this.name = name;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookieSale = avgCookieSale;
  this.total = 0;
  this.cookiesSale = [];
  this.hourlySale = [];
}

function firstLine(){
  let timeElem = document.createElement('tr');
  timeElem.textContent = 'Time:';
  table.appendChild(timeElem);

  for (let i = 0; i < hours.length; i++){
    let time = document.createElement('td');
    time.textContent = (hours[i]);
    timeElem.appendChild(time);
  }

  let totalElem = document.createElement('td');
  totalElem.textContent = 'Daily Location Total';
  timeElem.appendChild(totalElem);
}

LocatSales.prototype.generateCookies = function(){
  this.cookiesSale = Math.floor(randomSale(this.minCust, this.maxCust) * this.avgCookieSale);
};

LocatSales.prototype.render = function () {

  let articleElem = document.createElement('tr');
  table.appendChild(articleElem);

  let ulElem = document.createElement('th');
  ulElem.textContent = (this.name);
  articleElem.appendChild(ulElem);

  for (let i = 0; i < hours.length; i++) {
    this.generateCookies();
    let liElem = document.createElement('td');
    liElem.textContent = `${this.cookiesSale} cookies`;
    articleElem.appendChild(liElem);
    this.hourlySale.push(this.cookiesSale);
    this.total += this.cookiesSale;
  }
  let totalCon = document.createElement('td');
  totalCon.textContent =`${this.total} cookies`;
  articleElem.appendChild(totalCon);
};

function lastLine(){
  let lastLineElem = document.createElement('tr');
  lastLineElem.textContent = ('Totals');
  table.appendChild(lastLineElem);

  for(let i = 0; i < hours.length; i++){
    let sum = 0;
    for (let j = 0; j < allLocations.length; j++){
      sum += allLocations[j].hourlySale[i];
    }
    let lastLineCell = document.createElement('td');
    lastLineCell.textContent = `${sum} cookies`;
    lastLineElem.appendChild(lastLineCell);
    grandTotal += sum;
  }

  let grandTotalElem = document.createElement('td');
  grandTotalElem.textContent = `${grandTotal} Cookies Sold Today`;
  lastLineElem.appendChild(grandTotalElem);
}

let Seattle = new LocatSales('Seattle', 65, 23, 6.3);
let Tokyo = new LocatSales('Tokyo', 24, 3, 1.2);
let Dubai = new LocatSales('Dubai', 38, 11, 3.7);
let Paris = new LocatSales('Paris', 38, 20, 2.3);
let Lima = new LocatSales('Lima', 16, 2, 4.6);

allLocations.push(Seattle, Tokyo, Dubai, Paris, Lima);

















function renderAll(){
  firstLine();
  for (let i = 0; i < allLocations.length; i++){
    allLocations[i].generateCookies();
    allLocations[i].render();
  }
  lastLine();
}
renderAll();



// let Seattle = {
//   name: 'Seattle',
//   maxCust: 65,
//   minCust: 23,
//   avgCookieSale: 6.3,
//   total: 0,
//   cookiesSale: [],
//   generateCookies: function () {
//     this.cookiesSale = Math.floor(randomSale(23, 65) * this.avgCookieSale);
//   },
//   render: function () {
//     let body = document.querySelector('body');

//     let articleElem = document.createElement('article');
//     body.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = (this.name);
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       for (let j = 0; j < 1; j++) {
//         this.generateCookies();
//         let liElem = document.createElement('li');
//         liElem.textContent = `${hours[i]}: ${this.cookiesSale} cookies`;
//         ulElem.appendChild(liElem);
//       }
//       this.total += this.cookiesSale;
//       // console.log(this.total);
//     }
//     let totalElem = document.createElement('li');
//     totalElem.textContent = `Total: ${this.total} cookies `;
//     ulElem.appendChild(totalElem);
//   }
// };


// let Tokyo = {
//   name: 'Tokyo',
//   maxCust: 3,
//   minCust: 24,
//   avgCookieSale: 1.2,
//   total: 0,
//   cookiesSale: [],
//   generateCookies: function () {
//     this.cookiesSale = Math.floor(randomSale(3, 24) * this.avgCookieSale);
//   },
//   render: function () {
//     let body = document.querySelector('body');

//     let articleElem = document.createElement('article');
//     body.appendChild(articleElem);
//     articleElem.id = ('Tokyo');

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = (this.name);
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       for (let j = 0; j < 1; j++) {
//         this.generateCookies();
//         let liElem = document.createElement('li');
//         liElem.textContent = `${hours[i]}: ${this.cookiesSale} cookies`;
//         ulElem.appendChild(liElem);
//       }
//       this.total += this.cookiesSale;
//       // console.log(this.total);
//     }
//     let totalElem = document.createElement('li');
//     totalElem.textContent = `Total: ${this.total} cookies `;
//     ulElem.appendChild(totalElem);
//   }
// };


// let Dubai = {
//   name: 'Dubai',
//   maxCust: 11,
//   minCust: 38,
//   avgCookieSale: 3.7,
//   total: 0,
//   cookiesSale: [],
//   generateCookies: function () {
//     this.cookiesSale = Math.floor(randomSale(11, 38) * this.avgCookieSale);
//   },
//   render: function () {
//     let body = document.querySelector('body');

//     let articleElem = document.createElement('article');
//     body.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = (this.name);
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       for (let j = 0; j < 1; j++) {
//         this.generateCookies();
//         let liElem = document.createElement('li');
//         liElem.textContent = `${hours[i]}: ${this.cookiesSale} cookies`;
//         ulElem.appendChild(liElem);
//       }
//       this.total += this.cookiesSale;
//       // console.log(this.total);
//     }
//     let totalElem = document.createElement('li');
//     totalElem.textContent = `Total: ${this.total} cookies `;
//     ulElem.appendChild(totalElem);
//   }
// };

// let Paris = {
//   name: 'Paris',
//   maxCust: 20,
//   minCust: 38,
//   avgCookieSale: 2.3,
//   total: 0,
//   cookiesSale: [],
//   generateCookies: function () {
//     this.cookiesSale = Math.floor(randomSale(20, 38) * this.avgCookieSale);
//   },
//   render: function () {
//     let body = document.querySelector('body');

//     let articleElem = document.createElement('article');
//     body.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = (this.name);
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       for (let j = 0; j < 1; j++) {
//         this.generateCookies();
//         let liElem = document.createElement('li');
//         liElem.textContent = `${hours[i]}: ${this.cookiesSale} cookies`;
//         ulElem.appendChild(liElem);
//       }
//       this.total += this.cookiesSale;
//       // console.log(this.total);
//     }
//     let totalElem = document.createElement('li');
//     totalElem.textContent = `Total: ${this.total} cookies `;
//     ulElem.appendChild(totalElem);
//   }
// };

// let Lima = {
//   name: 'Lima',
//   maxCust: 2,
//   minCust: 16,
//   avgCookieSale: 4.6,
//   total: 0,
//   cookiesSale: [],
//   generateCookies: function () {
//     this.cookiesSale = Math.floor(randomSale(2, 16) * this.avgCookieSale);
//   },
//   render: function () {
//     let body = document.querySelector('body');

//     let articleElem = document.createElement('article');
//     body.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = (this.name);
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < hours.length; i++) {
//       for (let j = 0; j < 1; j++) {
//         this.generateCookies();
//         let liElem = document.createElement('li');
//         liElem.textContent = `${hours[i]}: ${this.cookiesSale} cookies`;
//         ulElem.appendChild(liElem);
//       }
//       this.total += this.cookiesSale;
//       // console.log(this.total);
//     }
//     let totalElem = document.createElement('li');
//     totalElem.textContent = `Total: ${this.total} cookies `;
//     ulElem.appendChild(totalElem);
//   }
// };
