"use strict";
/* 

function logValues() {
    console.log('1');
    console.log('2');
    console.log('3');
    console.log('4');
    console.log('5');
}
logValues();
 */
/* function convertToMiles(kilometers) {
    const miles = (kilometers * 1.60934);
    return miles;
    
}
console.log(convertToMiles(10));


alert(convertToMiles(10)); */

/* function convertToGallons(litters) {
    const gallons = (litters * 3.76);
    return gallons;
}
alert(convertToGallons(100));  */



/* 
function convertToMeters(santimeters) {
    const meters = (santimeters / 100);
    return meters;
}
console.log(convertToMeters(1000));  */


/*  function convertToEuro(dollars) {
    const euro = (dollars / 1.1);
    return euro
}
alert("Hello, you summ is: " + convertToEuro(56) + " euros");  */



/* var age = prompt('What is your name?', 18);
alert(`Your name is ${age}`); */


/* var car = prompt('What car model do you prefer?', "car type"); 
alert(`You prefer ${car}, good choise`); */

/* var whoIsTheBoss = confirm('Homka supper?'); 
alert(whoIsTheBoss); */

/* var number = 10;

if(number != 10){
    alert("errorrr");
} else {
    alert("Krasava");
}

var arr = [10, 11, 50]; 
alert(arr[1]); */

/* var arr = [1, 11, 111, "line", "baker", 1.1, true, -10];
console.log(arr);
arr[1] = "Volvo XC60";


var matrix = [
    [1, 11, 111], ["how", "are", "you"], [1.1, 22, true]
]
alert(matrix[1] [1]);

 */

/* var arr = [10, 20, 30, 40, 50, "So", false, true, 101, 2.55]

for (var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    console.log("Element  " + (i + 1) + "= " + arr[i]);
}


var o = 0;
do {
    console.log(o);
    o += 10;
} while(o < 50)
 */


/* var data = confirm("Are you ready?");
console.log(data);
if(data){
    alert("Good job")
} else{
    alert("Come on");
}

var v = prompt("How old are you bro?", 100);
console.log("I'm : " + v + " years old");
 */


/* 
var person = null;
if(confirm("Are you sure?")) {
    person = prompt("Enter your name");
    alert("Hey :" + person);
} else{
    alert("You pressed <Cancel>");
}
 */

/* var counter = 0;

function onClickButton(el) {
    counter++;
    if (counter == 1) {
        el.innerHTML = "Вы нажали на кнопку : " + counter + " раз.";
    } else{
        el.innerHTML = "Вы нажали на кнопку : " + counter + " раза.";
    }
    // el.innerHTML = "Вы нажали на кнопку : " + counter + " раз."; 
    el.style.cssText = "background: #293; color: blue; font-size: 20px; padding: 5px 50px" ;
}

function onInput(el) {
    if (el.value == "Hi") {
        alert("Hey, how are you?")
    }
    counter++
    console.log(el.value);    
} */

// var spans = document.getElementsByTagName('span');

/* var spans = document.getElementsByClassName('simple');

for(var i = 0; i < spans.length; i++){
    console.log(spans[i].innerHTML);
}

 */



/* function checkForm(el) {
    var name = el.name.value; 
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

    var fail = "";

    if(name == "" || pass == "" || state == "" ||) 
        fail = "Faill all forms";
    else if(name.length <= 1 || name.length > 50)
        fail = "Enter discent name";
    else if(pass != repass)
        fail = "Password should match";
    else if(pass.split("&").length > 1)
        fail = "Incorrect password"

    if(fail != ""){
        document.getElementById('error').innerHTML = fail;
        return false
    } else {
        alert("todo bien");
        return true;
    }



} */


/* const isUserReady = confirm('Готов?')    

if (isUserReady) {
    console.log('Lets go')
} else {
    console.log('Lets wait ...')
}
 */

let count = 11


do {
    console.log(count)
    count++
} while (count < 10)









