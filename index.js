// console.warn("This is warning");
// console.error("This is error");
// console.log("This is working");


// var number1 = 19;
// var number2 = 8;
// console.log(number1+number2);
// console.log(number1+number2+number2) 
// /*
// Multiline comment

// */
// var age = 4 
// if(age>2){
//     console.log("You are not kid")
// }
// var arr = [1,2,3,4,5]
// console.log(arr)
// for(i=0;i<arr.length;i++)
// {
//     console.log(arr[i])
// }
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getHours());
// console.log(myDate.getDay());
// console.log(myDate.getTimezoneOffset());
// document.location
// tn = document.getElementsByTagName('div');
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is new para";
// tn[0].appendChild(createdElement);

// For ID : button (this is created first in html file)
document.getElementById("Click").style.backgroundColor = "yellow";
document.getElementById("secondButton").style.backgroundColor = "red";

// style is container : all background colour is cyan and independent fix colour to yellow as follows,
//console.log(document.getElementById("test").style.backgroundColor = "green");
document.getElementById("test").style.backgroundColor = "green";
document.getElementById("test1").style.backgroundColor = "blue"


//For container 
let elemClass = document.getElementsByClassName("container");
//elemClass[0].style.backgroundColor = "red";

// Style bg-primary and text-sucess applied to container 3 
elemClass[2].classList.add("bg-primary");
elemClass[2].classList.add("text-sucess");
//document.getElementsByClassName("container").[0].style.backgroundColor = "violet";  
//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText); 


// first in html in button onclick="clicked()" then in js file function written
function clicked()
{
    console.log('The button was clicked ');
}

// on load (direct no need to any correction in html)
window.onload = function (){
    console.log('The document loading ');
}

// adding Event Listener to specific button :  Tested is displayed
 //  on console with how many times it clicked. 
// test1.addEventListener('click' , function(){
//     console.log('clicked on container');
// })

// test1.addEventListener('mouseover' , function(){
//     console.log('Mouse over on container');
// })
// test1.addEventListener('mouseout' , function(){
//     console.log('Mouse out of container');
// })
let prevHTML = document.querySelectorAll('.container')[2].innerHTML;

test2.addEventListener('mouseup' , function(){
    document.querySelectorAll('.container')[2].innerHTML = prevHTML;
    console.log('Mouse up when clicked on container');
})
test2.addEventListener('mousedown' , function(){
    document.querySelectorAll('.container')[2].innerHTML = "<b> We have clicked</b>"
    console.log('Mouse down when clicked on container');
})
 
summ = (a,b)=>{
    return a+b;
}
logon = () => {
    
    document.querySelectorAll('.container')[2].innerHTML = "<b>Set interval fired</b>"
    console.log("Log on");
}
setTimeout(logon,2000);

// Local storage 
localStorage.setItem('name', 'Bhalchandra')
undefined
localStorage.getItem('name')
 
