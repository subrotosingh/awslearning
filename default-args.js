// Generated by CoffeeScript 2.3.1
(function() {
  var calculateTotal;

  calculateTotal = function(sub_total, rate = 0.05) {
    var tax;
    tax = sub_total * rate;
    sub_total + tax;
    console.log(calculateTotal(100, 0.0625));
    return console.log(calculateTotal(100));
  };

}).call(this);
