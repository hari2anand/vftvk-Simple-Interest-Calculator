function compute(){
 //function for computing the Intrest - Prepared for Exercise 4
    var principal = document.getElementById("principal").value;
    //To validate the prinicpal not goes below 0
    if (principal<=0){
      document.getElementById("result").innerHTML = "Please enter a valid amount.";
      return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (parseInt(principal) * parseFloat(rate) * parseInt(years))/100;
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var maturityYear = parseInt(years) + parseInt(year);
    var maturityValue = parseInt(interest) + parseInt(principal);
    //Give customer a headsup on what he's gona pay for his life :lol
    var output = "If you deposit " + principal +"<br>at an interest rate of " + rate +"%.<br>You will receive an amount of " + maturityValue + "<br> at year " + maturityYear + ".<br>";
    document.getElementById("result").innerHTML = output;
}
function displayRate(){
    var rate = document.getElementById("rate").value;
    rate += "%";
    document.getElementById("displayRate").innerHTML = rate;
}
