const date = new Date();
const renderCalender = ()=>{
    const monthdays = document.querySelector(".days");
const lastday = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
date.setDate(1);
const prevLastDay=new Date(date.getFullYear(),date.getMonth(),0).getDate();
const lastDayIndex=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
const firstDayIndex=date.getDay();
console.log(lastDayIndex);
const nextDays=7-lastDayIndex-1;


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector(".month h1").innerHTML
= months[date.getMonth()];
document.querySelector(".month p").innerHTML
= new Date().toDateString();
let days="";

for(let x = firstDayIndex;x>0;x--)
{
    days += `<div class="prev-date">
    ${prevLastDay-x+1}</div>`;

}

for(let i=1;i<=lastday;i++)
{
if(i=== new Date().getDate() && date.getMonth()===new Date().getMonth()){
    days+=`<div class="today">${i}</div>`;
}
else{
     days+=`<div>${i}</div>`;
}
    
   
}
for(let j=1;j<=nextDays;j++)
{
    days += `<div class = "next-date">${j} </div>`;
    monthdays.innerHTML=days;
}
}


document.querySelector(".prev").addEventListener('click',()=>{date.setMonth(date.getMonth()-1)
    renderCalender();});
document.querySelector(".next").addEventListener('click',()=>{date.setMonth(date.getMonth()+1)
    renderCalender();});


renderCalender();

