myBody = document.body;
var timeCont;
var onTimer;
var pause = 0;
var pauseTime = null;
var startTime;
var init = 0;
var beginTime;
var hSpan = document.getElementById('hours'),
    minSpan = document.getElementById('mins'),
    secSpan = document.getElementById('secs'),
    msSpan = document.getElementById('ms');
var myButtons = document.createElement('button');
var startButton = new createButton('Start');
var stopButton = new createButton('Clear');

function createButton(name)  {
   var myButton = document.createElement('button');
   var button = document.createElement('button');
   button.innerHTML = name;
   myBody.appendChild(button);
    
    if (name == 'Start') {
        button.classList.add('start');
    } else {button.classList.add('clear');}
     return button;
}
        
startButton.addEventListener('click', startBut);     
stopButton.addEventListener('click', stopBut); 
    
function startBut() {
    (startButton.innerHTML === 'Start') ? (
      beginTime = new Date() - pauseTime,
      console.log('beginTime  45 ' + beginTime),
      console.log('pauseTime ' + pauseTime),
      runTimer(),
  startButton.innerHTML = 'Pause') : (
        stopTimer(), 
        startButton.innerHTML = 'Start')
}

function stopBut() {
    stopButton.innerHTML === 'Clear';
    resetTimer(onTimer);    
}  
       
 function runTimer() {
  onTimer = setInterval(myTimer, 1); 
      function myTimer() {   
          var delta = new Date() - beginTime;
          var hours = Math.floor(delta/3600000);
          delta = delta - hours*3600000;
          var mins = Math.floor( delta/60000 );
          delta = delta - mins*60000;
          var secs = Math.floor( delta/1000 );
          delta = delta - secs*1000;
          var ms = delta;
          hSpan.innerHTML = format(hours, 2);
          minSpan.innerHTML = format(mins, 2);
          secSpan.innerHTML = format(secs, 2);
          msSpan.innerHTML = format(ms, 3);
      }
}

function format(num, maxNumbers) {
  var numStr = num + '';
  while(numStr.length < maxNumbers) {
    numStr = '0' + numStr;
  }
  return numStr;
}

function stopTimer() {   
    clearInterval(onTimer);
    pauseTime = new Date() - beginTime;
}

function resetTimer() {
    ms.innerHTML = '000';
    secs.innerHTML = '00';
     mins.innerHTML = '00';
    hours.innerHTML = '00';
    clearInterval(onTimer);
    beginTime = new Date();
    pauseTime = null;
    startButton.innerHTML = 'Start';    
}