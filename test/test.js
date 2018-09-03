//Unit testing the robot factory code using Mocha
var assert = require("assert");
const Robots = require('../index.js');
const robot2 = Robots.robot2;
const robot3 = Robots.robot3; //declaring all the objects to be tested from index
const robot4 = Robots.robot4;
const robot5 = Robots.robot5;
//const robot6 = Robots.robot6;
//const robot8 = Robots.robot8;

describe('Advanced Objects lesson testing', function(){

    describe('Section 2', function(){
        //declaring a robot object to test with the actual object/code in index.js
        var robot = {

            model: '1E78V2',
            energyLevel: 100,
        };

        it('returns a string of the robot model and energy level', function(){

            var solution = `I am ${robot.model} and my current energy level is ${robot.energyLevel}.`;
        
            var result = robot2.provideInfo();

            assert.equal(result,solution);


        });
    });

    describe('Section 3', function(){

        var robot = {
            energyLevel: 100,
        };

        it('returns a string with the robots current energy level', function(){

            var solution = `Energy is currently at ${robot.energyLevel}%.`;// output string I want
        
            result = robot3.checkEnergy(); //calls checkEnergy function with robot3 object using modules

            assert.equal(result,solution); //checking if module string is equal to the expected solution


        });
    });
    describe('Section 4', function(){

        var robot = {
            _energyLevel: 140,
        };

        it('returns a string with the robots recharged current energy level', function(){

            var solution = `Recharged! Energy is currently at ${robot._energyLevel}%.`;// output string I want
        
            result = robot4.recharge(); //calls recharge function with robot3 object using modules

            assert.equal(result,solution); //checking if module string is equal to the expected solution


        });
    });

    describe('Section 5', function(){

        var robot = {
            _model: '1E78V2',
            _energyLevel: 100,
        };

        it('returns a string with get function', function(){

            if (typeof robot._energyLevel === 'number') {
                var solution = 'My current energy level is ' + robot._energyLevel
            } else {
                return "System malfunction: cannot retrieve energy level"
            }
           
            result = robot5.energyLevel; 

            assert.equal(result,solution); //checking if module string is equal to the expected solution


        });
    });
});

