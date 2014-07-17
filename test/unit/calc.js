/* global describe, it */
/* jshint expr:true */

'use strict';

var expect = require('chai').expect;
var Calc = require('../../app/models/calc');

describe('Calc', function(){
  describe('.add', function(){
    it('should add two numbers', function(){
      var sum = Calc.add(2, 3);
      expect(sum).to.equal(5);
    });
  });

  describe('.sub', function(){
    it('should subtract two numbers', function(){
      var dif = Calc.sub(5, 3);
      expect(dif).to.equal(2);
    });
  });

  describe('.distance', function(){
    it('should find the distance between 2 points', function(){
      var dist = Calc.distance({x:0, y:0}, {x:3, y:4});
      expect(dist).to.equal(5);
    });
  });

  describe('.line', function(){
    it('should display the equation of the line between two points', function(){
      var y = Calc.line({x:0, y:0}, {x:3, y:4});
      var y2 = Calc.line({x:0, y:4}, {x:3, y:0});
      expect(y).to.equal('1.3x+0.0');
      expect(y2).to.equal('-1.3x+4.0');
    });
  });

  describe('.trip', function(){
    it('should calculate the total distance between an array of points', function(){
      var points = [{x:1, y:1},{x:3, y:3},{x:5,y:2},{x:6,y:5},{x:7,y:4}];
      var dist = Calc.trip(points);
      expect(dist).to.be.closeTo(9.64, 0.01);
    });
  });

  describe('.mean', function(){
    it('should calculate the average of an array of numbers', function(){
      var numbers = [2, 4, 6, 8, 3];
      var me = Calc.mean(numbers);
      expect(me).to.be.closeTo(4.60, 0.01);
    });
  });

});
