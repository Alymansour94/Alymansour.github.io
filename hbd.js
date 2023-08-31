var day = document.getElementById('day') ;
var month = document.getElementById('month') ;
var year = document.getElementById('year') ;
var btn = document.getElementById('button') ;
var hbd = document.getElementById('hbd') ;
var hbde = document.getElementById('hbde') ;
var firstdiv = document.getElementById('firstdiv') ;

function cong() {
    
    firstdiv.style.display='none'
    hbd.style.display='none'

    if(day.value == "5"  && month.value == "may" && year.value=="2000") {
        
       
        hbde.style.display='block'
    }

    else if (day.value == "day"  || month.value == "month" || year.value=="year") {
        alert('enter your birthday')
        firstdiv.style.display='block'

    }

    else {
        hbd.textContent=`happy birthday  `
        hbd.style.display='block'

    }  
}
