function startTimer() {
    var my_timer = document.getElementById("text");
    
    var time = my_timer.innerHTML;
    
    var arr = time.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
    var my_ms = document.getElementById("milisec");
   
   var time2 = my_ms.innerHTML;
    var ms = +time2;
    
   if (ms == 500) {
    if (s == 60) {
      if (m == 60) {
        if (h == 99) {
          alert("Время вышло");
          window.location.reload();
          return;
        }
        h++;
        m = 0;
        if (h < 10) h = "0" + h;
      }
      m++;
      if (m < 10) m = "0" + m;
      s = 0;
    }
     s++;

    if (s < 10) s = "0" + s;
     ms = 0;  
       document.getElementById('text').innerHTML = h+':'+m+':'+s;
   } else ms++;
    document.getElementById('milisec').innerHTML = '      '+ms;
    timeout1 = setTimeout(startTimer, 50);  
  }

function stopTimer() {    
clearTimeout(timeout1); 
}
