
'use strict';

function Calc(){}

Calc.add = function(x, y){
  return x + y;
};

Calc.sub = function(x, y){
  return x - y;
};

Calc.distance = function(p1, p2){
  var a = p2.x - p1.x;
  var b = p2.y - p1.y;
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
};

Calc.line = function(p1, p2){
  var x = p2.x - p1.x;
  var y = p2.y - p1.y;
  var m = y/x;
  var b = p2.y - (m * p2.x);
  var sign = b < 0 ? '-' : '+';
  b = Math.abs(b);

  return m.toFixed(1) + 'x' +  sign + b.toFixed(1);
};

Calc.trip = function(points){
  var sum = 0;

  for(var i = 0; i < points.length - 1; i++){
    sum += Calc.distance(points[i], points[i+1]);
  }
  return sum;

};

Calc.mean = function(nums){
  var sum = 0;
  for(var i = 0; i < nums.length; i++){
    sum += nums[i];
  }

  return sum / nums.length;
};

module.exports = Calc;
