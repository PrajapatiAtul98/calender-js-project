
 var currDate = new Date();//to access globally

 function showCalender() {

  
var endDate = new Date(currDate.getFullYear(),currDate.getMonth() + 1 ,0);

currDate.setDate(1)
var dayOfDate1 = currDate.getDay();  //4
var preDateOf1 = new Date(currDate.getFullYear(),currDate.getMonth() ,0);


//set current date
document.getElementById("curr-date").innerHTML = currDate.toDateString();

//set month
var monthsArr = ["January","February","March","April","May","June","July",
"August","September","October","November","December"]
document.getElementById("month").innerHTML = monthsArr[currDate.getMonth()];


//make calender's day-numbers

var numbers = ""


for( var j  = dayOfDate1; j>0 ; j--){

   numbers+= "<div class='preDateOf_1' >" + (preDateOf1.getDate() - j + 1 ) + "</div>"
}


var today = new Date()

let i =1;
while(i <= endDate.getDate()){  // i running from first date to last date
   if( i == today.getDate() && currDate.getMonth() == today.getMonth()){ 
      //if curr date and currMonth will bi matched then class "today will active" 
      numbers+= "<div class='today'>" + i + "</div>"
   
   }else{
      numbers+= "<div>" + i + "</div>"
   }
   i++
   
}

 document.getElementById("number-days").innerHTML = numbers;


 
}

 //arrow handler
 function moveDate(para){   //parameter==prev or next
   if(para == 'prev'){
      currDate.setMonth(currDate.getMonth() - 1);

   }
   else if(para == 'next'){
      currDate.setMonth(currDate.getMonth() + 1);
   }
   showCalender();
   
 }

 //timer

 timer = setInterval(() => {
   //console.log("++",new Date().toLocaleTimeString())
   document.getElementById("currTime").innerHTML = new Date().toLocaleTimeString()
 } ,1000)
   
 