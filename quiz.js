function check() {
    var R=0 ;
    var q1=document.quiz.Q1.value ;
    var q2=document.quiz.Q2.value ;
    var q3=document.quiz.Q3.value ;
    var q4=document.quiz.Q4.value ;
    var q5=document.quiz.Q5.value ;
    var q6=document.quiz.Q6.value ;
    var q7=document.quiz.Q7.value ;
    var q8=document.quiz.Q8.value ;
    var q9=document.quiz.Q9.value ;
    var q10=document.quiz.Q10.value ;
    var q11=document.quiz.Q11.value ;
    var q12=document.quiz.Q12.value ;
    var q13=document.quiz.Q13.value ;
    var q14=document.quiz.Q14.value ;
    var q15=document.quiz.Q15.value ;
    var HH=document.getElementById('hiddenh1');
    var form=document.getElementById('quizform');
    if (q1=="a2") {R++}
    if (q2=="a3") {R++}
    if (q3=="a3") {R++}
    if (q4=="a1") {R++}
    if (q5=="a4") {R++}
    if (q6=="a2") {R++}
    if (q7=="a2") {R++}
    if (q8=="a2") {R++}
    if (q9=="a3") {R++}
    if (q10=="a4") {R++}
    if (q11=="a2") {R++}
    if (q12=="a2") {R++}
    if (q13=="a2") {R++}
    if (q14=="a1") {R++}
    if (q15=="a3") {R++}

   form.style.display='none' ;
   document.getElementById('button').style.display='none' ;

   HH.textContent=`You Got ${R}/15`;

   if(R >= 8) {document.getElementById('konw').style.display='block'  }
   else { document.getElementById('dontknow').style.display='block'   }
       
    
    
}