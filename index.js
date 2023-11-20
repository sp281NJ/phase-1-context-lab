/* Your Code Here */

const property = ["firstName", "familyName", "title", "payPerHour","timeInEvents","timeOutEvents"];
let employeeRds = [];
let timeInEvent =new Object();
let timeOutEvent = new Object();
let EmployeeObj;

let wagesworked;
let timeEvents2 =0;

  


////////////////////////////////////////////////////// create one record ///////////////////////

function createEmployeeRecord(propdata){
 // console.log("line 18 "+propdata );
  let obj = new Object();

obj.firstName= propdata[0];
obj.familyName= propdata[1];
obj.title = propdata[2];
obj.payPerHour = propdata[3];
obj.timeInEvents = [];
obj.timeOutEvents = [];
return obj;


};
////////////////////////////////////////////////////// create two records ///////////////////////
function createEmployeeRecords(employeerecords){
 //console.log("line 43=  ",employeerecords);

   return employeerecords.map((employeerecord)=> createEmployeeRecord(employeerecord))
   
   };
  





////////////////////////////////////////////////////////add time in event  //////////////
function createTimeInEvent(timeinvalue){
//console.log("line 85 - "+this.payPerHour);


//console.log("line 87=  "+(EmployeeObj.firstName == this.firstName));
  

 let dateTimeInParts = timeinvalue.toString().split( " " ); 
    let tdate = dateTimeInParts[ 0 ]; // "2021-08-31"
    let thour = parseInt(dateTimeInParts[ 1 ]); //1400
   
        timeInEvent = {
                           type: 'TimeIn',
                           time: timeinvalue,
                           date: tdate,
                           hour: thour        
                        };
    this.timeInEvents.push(timeInEvent); 
   // console.log(this);
    //console.log("line 105 - "+this.timeInEvent);
    return this;
    

                     
 };
  //////////////////////////////////////////////////// add Time out event ///////////////////////
   
  function createTimeOutEvent(timeoutvalue){
 //console.log("line 100 - "+timeoutvalue);

//console.log(this);
let dateTimeInParts2 = timeoutvalue.toString().split( " " ); 
let tdate2 = dateTimeInParts2[ 0 ]; // "2015-02-28"
let thour2= parseInt(dateTimeInParts2[ 1 ]); //1700

     timeOutEvent = {
        type: 'TimeOut',
        time: timeoutvalue,
        date: tdate2,
        hour: thour2
      };
   
    this.timeOutEvents.push(timeOutEvent); 
    
    return this;


};

/////////////////////////////////////////////////////// hourss worked on date ///////////////////////////
function hoursWorkedOnDate(d){
   //console.log(this);
   const result = this.timeInEvents.find(({ date }) => date === d);
   //console.log("line 142= ",result);
   const resultout = this.timeOutEvents.find(({ date }) => date === d);

   return (resultout.hour - result.hour)/100;


};

///////////////////////////////////////////////////// wages earned on Date

function wagesEarnedOnDate(date){
//console.log(EmployeeObj[6]);
//console.log("line 164  "+this);
//console.log(datecollection.length);
 ///////////////////////////////////////////////////////////////////
      timeEvents2 = hoursWorkedOnDate.call(this, date);
 
   wagesworked = (timeEvents2) *(this.payPerHour)
   
       return wagesworked;
 };
/*
//////////////////////////////////////////////////// all Wages For ////////////////////
   ///////////////////////////////////////////////////////////////////////////////////////////

 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!

*/
 
 const allWagesFor = function () {
   //console.log(this);
   const eligibleDates = this.timeInEvents.map(function (e) {
   // console.log(e.date);
       return e.date
   })
//console.log(eligibleDates.length);
   const payable = eligibleDates.reduce(function (memo, d) {
     // console.log(d +"line 224");
     //console.log("line 203  "+memo);
       return memo + wagesEarnedOnDate.call(this, d)
   }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

   return payable;



} ; 

function  findEmployeeByFirstName(employeeE,employee2){
//console.log("line 162= ",employeeE);
const retfamilyName = employeeE.find(({ firstName }) => firstName === employee2);


//console.log("line 156= ",retfamilyName);
return retfamilyName ;
};

function calculatePayroll(employeeE){
   
    
let firstemployee; // = employeeE[0].timeInEvents;
let firstemployeeout; // =employeeE[0].timeOutEvents;

let holder3 = [];
let temptotalamt = [];
/////////////// extract hours in   ///////////////////////////////////////
for (let b=0; b < employeeE.length; b++){
        //holder3.push((firstemployee[b].hour)/100);
        firstemployee = employeeE[b].timeInEvents;  //get time IN hours
        firstemployeeout = employeeE[b].timeOutEvents; //get time OUT hours
        holder3 = employeeE[b].payPerHour;
        for (let c=0; c < firstemployee.length; c++){
           

            temptotalamt.push(( ((firstemployeeout[c].hour)/100) - ((firstemployee[c].hour)/100) )* holder3);  //get the total
                  
        };
};

let totalamt = temptotalamt.reduce((accumulator,value)=>{
    return accumulator + value;
},0);  

//console.log( temptotalamt);


   return totalamt;

};
