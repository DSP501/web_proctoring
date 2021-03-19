// var link = "aHR0cHM6Ly9mb3Jtcy5nbGUvNWJYdTI0Q0xLMlpwdVhiNTY="
var link = "aHR0cHM6Ly9mb3Jtcy5vZmZpY2UuY29tL1BhZ2VzL1Jlc3BvbnNlUGFnZS5hc3B4P2lkPURRU0lrV2RzVzB5eEVqYWpCTFp0clFBQUFBQUFBQUFBQUFOX19oaVQyYXBVTmtkVVJVNHdSMWM0VTFVME1VZE9TME0xVDFKWFZrcE9WaTR1"

var main_div = document.getElementById("main_div");
var enter_div = document.getElementById("enter_div");
var frame_div = document.getElementById("frame_div");
var content_div = document.getElementById("content_div");
var pop_up = document.getElementById("pop_up");
var time_div = document.getElementById("time_div");
var away_time = document.getElementById("away_time")


var initial = 1;
var toggle_watch = true

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

// window.frames["myframe"].contentDocument.oncontextmenu = function(){
//     return false; 
//    };


function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    away_time.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 950);
  }
}

function resetTimer() {
    away_time.innerHTML = '00:00:00';
    hr = 0;
    sec = 0;
    min = 0;
    stoptime = true;
}


function menu() {
    return false
}

window.addEventListener('beforeunload', function (e) { 
    e.preventDefault(); 
    e.returnValue = ''; 
}); 


function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

setInterval( function() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    h = checkTime(h);
    document.getElementById('time_header').innerHTML =  "Time : "+h + ":" + m + ":" + s;
}, 1000);



function goFullScreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem = window.top.document.body; //To break out of frame in IE
        elem.msRequestFullscreen();
    }
}



function fullScreen() {

   
    // frame_div.style.display = "block";
    content_div.style.display = "block";
    enter_div.style.display = "none";

    // time_div.style.display = "block";

    var iframe = document.getElementById('myframe');
    iframe.style.display = "block";
    iframe.width = 1000;
    iframe.height = 640;
    iframe.src = atob(link);
    // iframe.oncontextmenu =  function(e){
    //     // console.log("iside")
    //     return false; 
    //     // e.preventDefault();
    //    };
    console.log(iframe)

    main_div.style.marginTop = "80px";
    goFullScreen();
    main_div.style.border = "3px solid black";
    addSecurity();

}




// function requestFullScreen() {

//     // proc.display = "none";

//     loop();

//     var iframe = document.createElement('iframe');
//     iframe.style.display = "visible";
//     iframe.width = screen.width;
//     iframe.height = screen.height ;
//     iframe.src = atob(link);
//     document.body.appendChild(iframe)

//     var el = document.body;
  
//     // Supports most browsers and their versions.
//     var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen 
//     || el.mozRequestFullScreen || el.msRequestFullScreen;
  
//     if (requestMethod) {
  
//       // Native full screen.
//       requestMethod.call(el);
      
  
//     } else if (typeof window.ActiveXObject !== "undefined") {
  
//       // Older IE.
//       var wscript = new ActiveXObject("WScript.Shell");
  
//       if (wscript !== null) {
//         wscript.SendKeys("{F11}");
//       }

//     }
// }


document.addEventListener("keydown", nocode, false);
document.addEventListener("keyup", nocode, false);
document.addEventListener("keypress", nocode, false); 


function nocode(e) {

    e.preventDefault();

    if(e.keyCode == 123 ) { //F12 Key
        e.preventDefault();
        return;
    }
    if(e.keyCode == 67 && e.ctrlKey ) { //ctrl + shift + c
        e.preventDefault();
        console.log("Event Trigered");
        return;
    }
    //zoom in ctrl +/-
    if(e.ctrlKey==true && (e.keyCode ==61 || e.keyCode == 107 || e.keyCode == 173 || e.keyCode == 109  || e.keyCode == 187  || e.keyCode == 189  )) {
        e.preventDefault();
    }

    if(e.keyCode == 27 && (e.keyCode==18 || e.keyCode == 9 || e.keyCode==82)) {
        e.preventDefault();
    }

    if(e.keyCode == 35) {
        e.preventDefault();
    }
}



function addSecurity() {

    setTimeout( function() { document.addEventListener("fullscreenchange", function() {
        if(initial ==1) {
            pop_up.style.display = "block";
            // frame_div.style.display = "none";
            // time_div.style.display = "none";
            content_div.style.display = "none";
            initial = 0;
            main_div.style.marginTop = "0px"
            main_div.style.border = "0px solid black";
        }
        else if(initial == 0) {
            // frame_div.style.display = "block";
            // time_div.style.display = "block";
            content_div.style.display = "block";
            pop_up.style.display = "none";
            initial = 1;
            main_div.style.marginTop = "80px";
            main_div.style.border = "3px solid black";
        }
        

         });

    }, 500);

    loop()

}

function loop() {

    setTimeout( function() {
        if(document.hasFocus()){
        //"document.hasFocus()" return **true** only if your on the tab.
            console.log("correct focus");
            stopTimer()
            toggle_watch = true
            loop();
        }
        else{
            // console.log("outoffocus");
            if(toggle_watch) {
                alert("You Cannot change tab during exam")
                toggle_watch = false
                startTimer()
            }    
            loop();
            
        }
    }, 1);

    window.onfocus = function() {
        //reactivted the function.
        loop();
    };
}
