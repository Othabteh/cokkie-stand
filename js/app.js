'use_strict';
var workingHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Daily Location Total'];

function Location(location, minimum, maximum, avgCookies, totalSales, salesArr) {
    this.location = location;
    this.minimum = minimum;
    this.maximum = maximum;
    this.avgCookies = avgCookies;
    this.totalSales = 0;
    this.salesArr = salesArr;

}

Location.prototype.CookiesAmount = function () {
    for (var index = 0; index < workingHours.length - 1; index++) {
        var numOfSales = Math.round((Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum) * this.avgCookies);
        this.totalSales += numOfSales;
        this.salesArr.push(numOfSales);
        // } console.log(this.totalSales);
        // console.log(this.salesArr);
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
    table.setAttribute('class', 'table-style');
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

    for (var i = 0; i < locations.length; i++) {
        var tr2 = document.createElement('tr');
        tr2.textContent = locations[i].location;
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
// var tr3=document.createElement('tr');
// tr.textContent='Totals';
// table.appendChild(tr3);



console.log(locations[0].salesArr);
render();