function mul() {
    let ad1 = document.getElementById('nn').value;
   let ad2 = document.getElementById('mm').value;
   for (let i = 1; i <= ad1; i++) {
       for (let j = 0; j <= ad2; j++) {
          let mult = i * j;
         dip.value += i + " x " + j + " = " + mult + "<br>";
       }
   }
   }
   function addi() {
    let ad1 = document.getElementById('nn').value;
   let ad2 = document.getElementById('mm').value;
   for (let i = 1; i <= ad1; i++) {
       for (let j = 0; j <= ad2; j++) {
          let dd = i + j;
         dip.value +=  "<tr>" + i + " + " + j + " = " + dd + "<br>"+ "</tr>"  ;
       }
   }
   }
   function subr() {
    let ad1 = document.getElementById('nn').value;
   let ad2 = document.getElementById('mm').value;
   for (let i = 1; i <= ad1; i++) {
       for (let j = 0; j <= ad2; j++) {
          let su = i - j;
         dip.value +=  i + " - " + j + " = " + su + "<br>";
       }
   }
   }
   function divi() {
    let ad1 = document.getElementById('nn').value;
   let ad2 = document.getElementById('mm').value;
   for (let i = 1; i <= ad1; i++) {
       for (let j = 1; j <= ad2; j++) {
          let di = i / j;
         dip.value +=  i + " / " + j + " = " + di + "<br>";
       }
   }
   }
   function equ() {
      document.getElementById('dplay').innerHTML = dip.value;
   }
   