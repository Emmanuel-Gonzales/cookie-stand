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
    this.cookiesSale = Math.floor(randomSale(23, 65) * this.avgCookieSale);
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
      this.total += this.cookiesSale;
      // console.log(this.total);
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
  avgCookieSale: 1.2,
  total: 0,
  cookiesSale: [],
  generateCookies: function () {
    this.cookiesSale = Math.floor(randomSale(3, 24) * this.avgCookieSale);
  },
  render: function () {
    let body = document.querySelector('body');

    let articleElem = document.createElement('article');
    body.appendChild(articleElem);
    articleElem.id = ('Tokyo');

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
      this.total += this.cookiesSale;
      // console.log(this.total);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total} cookies `;
    ulElem.appendChild(totalElem);
  }
};


let Dubai = {
  name: 'Dubai',
  maxCust: 11,
  minCust: 38,
  avgCookieSale: 3.7,
  total: 0,
  cookiesSale: [],
  generateCookies: function () {
    this.cookiesSale = Math.floor(randomSale(11, 38) * this.avgCookieSale);
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
      this.total += this.cookiesSale;
      // console.log(this.total);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total} cookies `;
    ulElem.appendChild(totalElem);
  }
};

let Paris = {
  name: 'Paris',
  maxCust: 20,
  minCust: 38,
  avgCookieSale: 2.3,
  total: 0,
  cookiesSale: [],
  generateCookies: function () {
    this.cookiesSale = Math.floor(randomSale(20, 38) * this.avgCookieSale);
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
      this.total += this.cookiesSale;
      // console.log(this.total);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total} cookies `;
    ulElem.appendChild(totalElem);
  }
};

let Lima = {
  name: 'Lima',
  maxCust: 2,
  minCust: 16,
  avgCookieSale: 4.6,
  total: 0,
  cookiesSale: [],
  generateCookies: function () {
    this.cookiesSale = Math.floor(randomSale(2, 16) * this.avgCookieSale);
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
      this.total += this.cookiesSale;
      // console.log(this.total);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total} cookies `;
    ulElem.appendChild(totalElem);
  }
};


console.log(Seattle);
Seattle.render();

console.log(Tokyo);
Tokyo.render();

console.log(Dubai);
Dubai.render();

console.log(Paris);
Paris.render();

console.log(Lima);
Lima.render();
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
