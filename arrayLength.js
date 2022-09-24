//array and comparison(array includes and length)
var guestsList = ["Abhijeet","Abhishek","Ashish","Andhra","Bhubanesh"];
var count = guestsList.length;
console.log(count);
console.log(guestsList[1]);
var checkList = prompt("Enter name!");
if(guestsList.includes(checkList)){
    alert("welcome");
}
else{
    alert("maybe next time!");
}
