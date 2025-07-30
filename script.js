const time = document.querySelector('#time');
const date = document.querySelector('#date');
const button = document.querySelector('#btn');
let is24hours = false;


function updateTime() {
    if(is24hours){
      time.innerText = new Date().toLocaleTimeString('en-US',{hour12 : false});
    }else{
       time.innerText = new Date().toLocaleTimeString();
    }
}
setInterval(updateTime, 1000);


function updatedate(){
    date.innerText = new Date().toLocaleDateString('en-IN');
}updatedate();


btn.addEventListener("click",() => {
   //console.log('hello');
   is24hours = !is24hours;
   is24hours?
   btn.innerText = "switch to 12-hour format"
   : btn.innerText = "switch to 24-hour format"
   updateTime();
})


