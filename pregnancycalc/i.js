let preg = new Pregnant();

var dategotpregnant = document.getElementById("dategotpregnant");


document.getElementById("calculateBtn").onclick = function() {

    if (dategotpregnant.value) {
        calculate();
    }

}

function calculate() {

    let results = preg.calculateRemainingDays(dategotpregnant.value);

    let markup = "";

    results.forEach((v, i) => {
        console.log(i);
        markup = `
               <p>Got Pregnant Date: ${v.gotPregnantDate} </p>
               <p>Days Pregnant : ${v.daysPregnant}</p>
               <p>Weeks Pregnant : ${v.weeksPregnant}</p>
               <p>Days Remaining to Delivery : ${v.remainingDays}</p>
               <p>Weeks Remaining : ${v.remainingWeeks}</p>
               <p>Months Remaining : ${v.remainingMonths}</p>
               <p>Delivery Date (Approx) : ${v.deliveryDate}</p>
       `;

    });

    let getTheResultsId = document.getElementById("results");

    getTheResultsId.innerHTML = markup;


}