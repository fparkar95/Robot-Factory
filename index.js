
//Section 2 this keyword
const robot2 = {

    model: '1E78V2',
    energyLevel: 100,

    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }

};



console.log(robot2.provideInfo());

//Section 3 Arrow functions
const robot3 = {
    energyLevel: 100,
    checkEnergy: function () {
        return (`Energy is currently at ${this.energyLevel}%.`)
    }
}


robot3.checkEnergy();


//Section 4 Privacy
const robot4 = {
    _energyLevel: 80,
    recharge() {
        this._energyLevel += 30;
        return(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot4.recharge();

//Section 5 Getters
const robot5 = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return 'My current energy level is ' + this._energyLevel
        } else {
            return "System malfunction: cannot retrieve energy level"
        }
    }
};

console.log(robot5.energyLevel);

//Section 6 Setters
const robot6 = {

    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return "Sensors are currently down."
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0')
        }
    }
};

robot6.numOfSensors = 100;
console.log(robot6.numOfSensors);

//Section 7, Factory Functions
const robotFactory = function(model, mobile){
    return{
      model: model,
      mobile: mobile,
      
      beep(){
        console.log('Beep Boop');
      }
    }
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();

  //Section 8 Destructured Assignment
  const robot8 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const {functionality} = robot8;
  functionality.beep();
  
  module.exports = {
    robot2,
    robot3,
    robot4,
    robot5,
    robot6,
    robot8
  }
