var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var sec = 0;
var min = 0;
var time=0;
var told=0;
timeup=0;
var answered=0;
var clue = ["Check the punctuation.","Solve b first.","Think of it as two seperate houses.","Think of how many holes a shirt normally has.","It says they're $1.00 APART not that one of them is $1.00.","The answer has six letters.","one digit.","seven letters.", "two digits."];
var riddles = [0,"A cat has 3 kittens: One, Two, and Three. What is the cat's name."," ","A man buys a house for 1 million dollars. He sells the house for 1.1 million dollars. Then, he buys it back for 1.2 million dollars. He sells it again for 1.3 million dollars. How much money did he earn/lose? Answer in millions.","How many holes does this t-shirt have?", "A bat and a baseball cost $1.10. If the bat costs one more dollar than the baseball, how much does the bat cost? Answer like this: $_._ _","The one who makes it always sells it. \n The one who buys it never uses it.\n The one who uses it never knows he's using it.\n It is a ______."]
var remclu = 3;
var clueUsed = 0;
var answer = ["WHAT",74658,0.2,8,"$1.05","COFFIN",7,"JANUARY",12,0];
var roomNum=1;
var win=new Image();
win.src="http://www.handymanserviceomahane.com/images/1051038_0.jpg"
document.getElementById('timer').innerHTML =
  10 + ":" + 00;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

//using functions/other
canvas.width=500;
canvas.height=300;
ctx.drawImage(win,0,0,500,300);
document.getElementById("riddle").innerHTML=riddles[roomNum];
//define functions:
function checkclue(){
  if(clueUsed==1){
    alert("You have already used your clue for this room.")} 
  else{
  if(remclu>0){
      if(confirm('Are you sure you want to use a clue? Doing so will take away one of your remaining clues. Press "Okay" to continue or press "Cancel"to cancel.')){
        remclu--;
        clueUsed=1;
      document.getElementById("clueMessage").innerHTML =clue[roomNum-1];
        if(remclu==1){    document.getElementById("remainingclues").innerHTML="You have 1 clue left."
        }   
   else{
   document.getElementById("remainingclues").innerHTML="You have "+remclu+" clues left."
        }     
      }
    }
    else{
      alert("You have no clues left!")
    }
  }
}
function ent(){
  if(timeup==0){
    var str = document.getElementById("INPUT").value;
    if(str.toUpperCase()==answer[roomNum-1]&&roomNum<10){
      alert("Great job! You made it to the next room.")
      roomNum++;
    document.getElementById("title").innerHTML="Escape Room #"+roomNum;
      changeCanvas();
    }  
    else if(roomNum<10){
      alert("Sorry, wrong answer!");
    }
    else{
       alert("Congratulations, you escaped!")
      answered=1
      document.getElementById("title").innerHTML="You Escaped!"  
      canvas.width=400;
      canvas.height=400;
      ctx.clearRect(0,0,canvas.width,canvas.height)
      ctx.drawImage(win,0,0,400,400)
      <iframe //win.src="https://giphy.com/embed/xT8qBepJQzUjXpeWU8" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/olympics-shaun-the-sheep-aardman-xT8qBepJQzUjXpeWU8">via GIPHY</a></p>
    }
  }
}
function help(){
  alert('Rules:\n- Click "ENTER" to submit your answer\n- Click "OK" to go to the next room or to confirm using a clue\n- Click clue for a hint\n- There should be no need for any spaces')
}
function changeCanvas(){
   clueUsed=0;
   document.getElementById("INPUT").value="";
document.getElementById("clueMessage").innerHTML="";
  document.getElementById("riddle").innerHTML=riddles[roomNum];
}
help();
