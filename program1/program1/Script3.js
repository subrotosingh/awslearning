function hello(num) {
    var num = 100;
    var sayHello = function () { alert(num); }
    num++;
    return sayHello;
}
var sayNumber = hello(50);
sayNumber();