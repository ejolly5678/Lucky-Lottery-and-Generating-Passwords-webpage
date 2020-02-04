/*
Elizabeth Jolly
Fall 2018
*/

/*
luck takes controls the luck part of the screen
*/
function luck(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*
lotto balls generates an indiviual random ball that is shown on the screen
*/
function lottoPowerBall(){
  var PB = 0;
  PB = Math.floor((0+Math.random() * 25) + 1);
  return PB;
}
/*
lottonumber generates all of the balls for the winning lottery and returns them
as an array
*/
function lottoNumber(){
  var a = 0;
  var lottoArray = [0];
  while(a<5){
    var val = Math.floor((0+Math.random() * 71 ) + 1);
    lottoArray[a] = val;
    a=a+1
  }
  return lottoArray;
  }
/*
check compares the lotto numbers generates with the numbers that the user has
inputed to compete in the lottery
*/
 function check(){

   var lottoBalls = lottoNumber();

   lottoBalls[5] = lottoPowerBall();

   var ball1 = parseInt(document.getElementById("lotto1").value);
  var ball2 = parseInt(document.getElementById("lotto2").value);
   var ball3 = parseInt(document.getElementById("lotto3").value);
   var ball4 = parseInt(document.getElementById("lotto4").value);
   var ball5 = parseInt(document.getElementById("lotto5").value);
      var pb = parseInt(document.getElementById("powerball").value);

   if(ball1 == lottoBalls[0] || ball2 == lottoBalls[1] || ball3 ==lottoBalls[2]
   || ball4 == lottoBalls[3] || ball5 == lottoBalls[4] || pb == lottoBalls[5]){
       alert("At least one of your balls is a winner!");
   }
   else{
     alert("none of your balls win! You're a loser!!");
   }

   var table = document.getElementById("lottoTable");
   var row = table.insertRow(1);
   var cell1 = row.insertCell(0);
   var cell2 = row.insertCell(1);
   var cell3 = row.insertCell(2);
   var cell4 = row.insertCell(3);
   var cell5 = row.insertCell(4);
   var cell6 = row.insertCell(5);
   cell1.innerHTML = "Lotto Results";
   cell2.innerHTML = lottoBalls[0];
   cell3.innerHTML = lottoBalls[1];
   cell4.innerHTML = lottoBalls[2];
   cell5.innerHTML = lottoBalls[3];
   cell6.innerHTML = lottoBalls[4];
   cell7.innerHTML = lottoBalls[5];
 }
/*
generates 10 passwords for the user. Adds them onto the end of the previously
generated passwords. Uses the generateOnePassword function
*/
 function generatePasswords(){
   count = 0;
   var passwords = [0];
   var table = document.getElementById("passTable");

  while (count<11)
  {
    passwords[count]=generateOnePassword();
    var row = table.insertRow(1);
    var cell = row.insertCell(0);
    cell.innerHTML=passwords[count];
  count++

  }

 }
/*
generates a singular password. used for the generate passwords function
*/
 function generateOnePassword() {
         var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#{$%^&*()♥+-=,.~``?/";
         var pass = "";
        // var table = document.getElementById("passTable");
      //   var row = table.insertRow(1);
        // var vell = row.insertCell(count);
     for (var i = 0, n = charset.length; i < 12; ++i) {
         pass += charset.charAt(Math.floor(Math.random() * n));
     }
      //  cell.innerHTML=passwords[count];
     return pass;
 }
