'use_strict';
var workingHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];

function Location(location, minimum, maximum, avgCookies, totalSales, salesArr) {
    this.location = location;
    this.minimum = minimum;
    this.maximum = maximum;
    this.avgCookies = avgCookies;
    this.totalSales = totalSales;
    this.salesArr = salesArr;
}
Location.prototype.CookiesAmount = function () {
    for (var index = 0; index < workingHours.length - 1; index++) {
        var numOfSales = Math.round((Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum) * this.avgCookies);
        this.totalSales += numOfSales;
        this.salesArr.push(numOfSales);

    }
}
var seattle = new Location('Seattle', 23, 65, 6.3, 0, []);
var tokyo = new Location('Tokyo', 3, 24, 1.2, 0, []);
var dubai = new Location('Dubai', 11, 38, 3.7, 0, []);
var paris = new Location('Paris', 20, 38, 2.3, 0, []);
var lima = new Location('Lima', 2, 16, 4.6, 0, []);
var locations = [seattle, tokyo, dubai, paris, lima,];

for (let i = 0; i < locations.length; i++) {
    locations[i].CookiesAmount();
}

function render() {

    var parentElement = document.getElementById('salesTabel');
    var table = document.createElement('table');
    table.setAttribute('id', 'table-style');
    // first row
    var tr = document.createElement('tr');
    var thE = document.createElement('th');
    tr.appendChild(thE);
    for (var index = 0; index < workingHours.length; index++) {
        var th = document.createElement('th');
        th.textContent = workingHours[index];
        tr.appendChild(th);
        table.appendChild(tr);

    }
// 2-5 rows
    for (var i = 0; i < locations.length; i++) {
        var tr2 = document.createElement('tr');
        tr2.textContent = locations[i].location;
        tr2.setAttribute('class', 'location');
        console.log(locations[i].location);

        for (var x = 0; x < workingHours.length; x++) {
            var td = document.createElement('td');
            if (x === workingHours.length - 1) {
                td.textContent = locations[i].totalSales;
            } else {
                td.textContent = locations[i].salesArr[x];

            }
            tr2.appendChild(td);
            table.appendChild(tr2);
        }
    }
    // last row
    var tr3 = document.createElement('tr');
    tr3.textContent = 'Totals';

    for (var i = 0; i < workingHours.length; i++) {
        var td = document.createElement('td');
        var sumation = 0;

        for (var y = 0; y < locations.length; y++) {
            if (i === workingHours.length - 1) {
                sumation += locations[y].totalSales;
            } else {
                sumation += locations[y].salesArr[i];
            }
        }
        td.innerText = sumation;
        tr3.appendChild(td);
    }
    table.appendChild(tr3);

    parentElement.appendChild(table);
}

console.log(locations[0].salesArr);
render();



// EVENT
var AddShopForm = document.getElementById('addShopForm');
AddShopForm.addEventListener('submit', function  () {
    event.preventDefault();
    var shopName = event.target.shopName.value;
    var minHourlyCust = Number(event.target.minHourlyCust.value);
    var maxHourlyCust = Number(event.target.maxHourlyCust.value);
    var avgCookie = Number(event.target.avgCookie.value);
    document.getElementById("addShopForm").reset();
    var addedShop = new Location(shopName, minHourlyCust, maxHourlyCust, avgCookie,0,[]);
    locations.push(addedShop);
    addedShop.CookiesAmount();
    var target=document.getElementById('table-style');
    target.parentNode.removeChild(target);
    render();

    
});
