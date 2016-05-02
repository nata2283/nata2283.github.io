function Human ()  {
    this.name = 'Ivan';
    this.age = 25;
    this.gender = 'male';
    this.growth = 180;
    this.weight = 70;   
};

function Worker () {
    this.placeWork = 'factory';
    this.salary = 1000; 
    this.work = function () {
        console.log('РАБОТАТЬ!!!');
    }
};

function Student () {
    this.placeStudy = 'university';
    this.grants = 200;
    this.saw = function () {
    console.log('Смотреть сериалы!')
}
};

Worker.prototype = new Human();
Student.prototype = new Human;

var Worker1 = new Worker();
var Worker2 = new Worker();
var Worker3 = new Worker();

var Student1 = new Student();
var Student2 = new Student();
var Student3 = new Student();

console.log('Worker1.name ', Worker1.name);
console.log('Worker2.age ', Worker2.age);
console.log('Worker3.gender ', Worker3.gender);
Worker2.work();
Worker3.work();
console.log('Student1.grants ', Student1.grants);
console.log('Student2.placeStudy ', Student2.placeStudy);
Student2.saw();
Student3.saw();

