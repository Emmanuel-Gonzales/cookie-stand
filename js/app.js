'use strict';

function randomSale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
  name: 'Seattle',
  maxCust: 65,
  minCust: 23,
  avgCookieSale: 6.3,
  total: 0,
  cookiesSale: [],
  generateCookies: function () {
    this.cookiesSale = randomSale(23, 65);
  },
  render: function () {
    let body = document.querySelector('body');

    let articleElem = document.createElement('article');
    body.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = (this.name);
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < hours.length; i++) {
      for (let j = 0; j < 1; j++) {
        this.generateCookies();
        let liElem = document.createElement('li');
        liElem.textContent = `${hours[i]}: ${this.cookiesSale} cookies`;
        ulElem.appendChild(liElem);
      }
      console.log(this.cookiesSale);
      this.total += this.cookiesSale;
      console.log(this.total);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total} cookies `;
    ulElem.appendChild(totalElem);
  }
};
let Tokyo = {
  name: 'Tokyo',
  maxCust: 3,
  minCust: 24,
  avgCookieSale: 6.3,
  cookiesSale: [],
  generateCookies: function () {
    this.cookiesSale = randomSale(23, 65);
  },
};

let Dubai = {
  name: 'Dubai',
  maxCust: 65,
  minCust: 23,
  avgCookieSale: 6.3,
  cookiesSale: [],
  generateCookies: function () {
    this.cookiesSale = randomSale(23, 65);
  },
};

let Paris = {
  name: 'Paris',
  maxCust: 65,
  minCust: 23,
  avgCookieSale: 6.3,
  cookiesSale: [],
  generateCookies: function () {
    this.cookiesSale = randomSale(23, 65);
  },
};

let Lima = {
  name: 'Lima',
  maxCust: 65,
  minCust: 23,
  avgCookieSale: 6.3,
  cookiesSale: [],
  generateCookies: function () {
    this.cookiesSale = randomSale(23, 65);
  },
};


























console.log(Seattle);
Seattle.render();
// let body = document.querySelector('body');

// let articleElem = document.createElement('article');
// body.appendChild(articleElem);

// let h2Elem = document.createElement('h2');
// h2Elem.textContent = (Seattle.name);
// articleElem.appendChild(h2Elem);

// let ulElem = document.createElement('ul');
// articleElem.appendChild(ulElem);



// for (let i = 0; i < hours.length; i++) {
//   for (let j = 0; j < 1; j++) {
//     Seattle.generateCookies();
//     let liElem = document.createElement('li');
//     liElem.textContent = `${hours[i]}: ${Seattle.cookiesSale} cookies`;
//     ulElem.appendChild(liElem);
//   }
// }
