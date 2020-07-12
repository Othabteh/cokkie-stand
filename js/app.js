'use_strict';

var seattel = {
    location: 'seattel',
    maximum: 62,
    minimum: 23,
    avgCookies: 6.3,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    totalSales: 0,
    salesArr: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum) * this.avgCookies);
            this.totalSales += numOfSales;
            this.salesArr.push(numOfSales);


        } console.log(this.totalSales);
        console.log(this.salesArr);
    },

    render: function () {
        var parentElement = document.getElementById('salesTabel');

        var shopLocation = document.createElement('p');
        shopLocation.textContent = this.location;
        parentElement.appendChild(shopLocation);



        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let index = 0; index < this.workingHours.length; index++) {
            var li = document.createElement('li');
            li.textContent = this.workingHours[index];
            ul.appendChild(li);

            if (this.workingHours[index] == 'Total') {
                var span = document.createElement('span');
                span.textContent = (' :  '+this.totalSales);
                li.appendChild(span);
            } else {

                var span = document.createElement('span');
                span.textContent = ('  :  ' + this.salesArr[index] + ' cookies');
                li.appendChild(span);
            }
           
        }
        
    }
}
seattel.cookiesAmount();
seattel.render();



var Tokyo = {
    location: 'Tokyo',
    maximum: 24,
    minimum: 3,
    avgCookies: 1.2,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    totalSales: 0,
    salesArr: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum) * this.avgCookies);
            this.totalSales += numOfSales;
            this.salesArr.push(numOfSales);


        } console.log(this.totalSales);
        console.log(this.salesArr);
    },
    

    render: function () {
        var parentElement = document.getElementById('salesTabel');

        var shopLocation = document.createElement('p');
        shopLocation.textContent = this.location;
        parentElement.appendChild(shopLocation);



        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let index = 0; index < this.workingHours.length; index++) {
            var li = document.createElement('li');
            li.textContent = this.workingHours[index];
            ul.appendChild(li);

            if (this.workingHours[index] == 'Total') {
                var span = document.createElement('span');
                span.textContent = (' :  '+this.totalSales);
                li.appendChild(span);
            } else {

                var span = document.createElement('span');
                span.textContent = ('  :  ' + this.salesArr[index] + ' cookies');
                li.appendChild(span);
            }
           
        }
        
    }
}
Tokyo.cookiesAmount();
Tokyo.render();



var Dubai = {
    location: 'Dubai',
    maximum: 38,
    minimum: 11,
    avgCookies: 3.7,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    totalSales: 0,
    salesArr: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum) * this.avgCookies);
            this.totalSales += numOfSales;
            this.salesArr.push(numOfSales);


        } console.log(this.totalSales);
        console.log(this.salesArr);
    },

    render: function () {
        var parentElement = document.getElementById('salesTabel');

        var shopLocation = document.createElement('p');
        shopLocation.textContent = this.location;
        parentElement.appendChild(shopLocation);



        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let index = 0; index < this.workingHours.length; index++) {
            var li = document.createElement('li');
            li.textContent = this.workingHours[index];
            ul.appendChild(li);

            if (this.workingHours[index] == 'Total') {
                var span = document.createElement('span');
                span.textContent = (' :  '+this.totalSales);
                li.appendChild(span);
            } else {

                var span = document.createElement('span');
                span.textContent = ('  :  ' + this.salesArr[index] + ' cookies');
                li.appendChild(span);
            }
           
        }
        
    }
}
Dubai.cookiesAmount();
Dubai.render();



var Paris = {
    location: 'Paris',
    maximum: 38,
    minimum: 20,
    avgCookies: 2.3,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    totalSales: 0,
    salesArr: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum) * this.avgCookies);
            this.totalSales += numOfSales;
            this.salesArr.push(numOfSales);


        } console.log(this.totalSales);
        console.log(this.salesArr);
    },

    render: function () {
        var parentElement = document.getElementById('salesTabel');

        var shopLocation = document.createElement('p');
        shopLocation.textContent = this.location;
        parentElement.appendChild(shopLocation);



        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let index = 0; index < this.workingHours.length; index++) {
            var li = document.createElement('li');
            li.textContent = this.workingHours[index];
            ul.appendChild(li);

            if (this.workingHours[index] == 'Total') {
                var span = document.createElement('span');
                span.textContent = (' :  '+this.totalSales);
                li.appendChild(span);
            } else {

                var span = document.createElement('span');
                span.textContent = ('  :  ' + this.salesArr[index] + ' cookies');
                li.appendChild(span);
            }
           
        }
        
    }
}
Paris.cookiesAmount();
Paris.render();



var Lima = {
    location: 'Lima',
    maximum: 16,
    minimum: 2,
    avgCookies: 4.6,
    workingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'],
    totalSales: 0,
    salesArr: [],
    cookiesAmount: function () {

        for (let index = 0; index < this.workingHours.length - 1; index++) {
            var numOfSales = Math.round((Math.floor(Math.random() * (this.maximum - this.minimum + 1)) + this.minimum) * this.avgCookies);
            this.totalSales += numOfSales;
            this.salesArr.push(numOfSales);


        } console.log(this.totalSales);
        console.log(this.salesArr);
    },

    render: function () {
        var parentElement = document.getElementById('salesTabel');

        var shopLocation = document.createElement('p');
        shopLocation.textContent = this.location;
        parentElement.appendChild(shopLocation);



        var ul = document.createElement('ul');
        parentElement.appendChild(ul);
        for (let index = 0; index < this.workingHours.length; index++) {
            var li = document.createElement('li');
            li.textContent = this.workingHours[index];
            ul.appendChild(li);

            if (this.workingHours[index] == 'Total') {
                var span = document.createElement('span');
                span.textContent = (' :  '+this.totalSales);
                li.appendChild(span);
            } else {

                var span = document.createElement('span');
                span.textContent = ('  :  ' + this.salesArr[index] + ' cookies');
                li.appendChild(span);
            }
           
        }
        
    }
}
Lima.cookiesAmount();
Lima.render();