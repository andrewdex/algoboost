class Pregnant {

    constructor(id, x, y) {
        this.id = id;
    }

    calculateRemainingDays(gotPregnantDate) {

        let gotPregnant = new Date(gotPregnantDate);
        let currentDate = new Date();
        let timeDiff = Math.abs(currentDate.getTime() - gotPregnant.getTime());
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        let generalWeeksOfPregnancy = 40;

        let generalDaysOfPregnancy = generalWeeksOfPregnancy * 7;

        let generalMonthsOfPregnancy = 10;

        let monthsPregnant = (diffDays / 29).toFixed(2);

        let weeksPregnant = (diffDays / 7).toFixed(1);

        let daysRemaining = generalDaysOfPregnancy - diffDays;

        let weeksRemaining = generalWeeksOfPregnancy - weeksPregnant;

        let monthsRemaining = (generalMonthsOfPregnancy - monthsPregnant).toFixed(2);
        let dateNow = new Date();
        let deliveryDateApproximateCalculated = dateNow.setDate(gotPregnant.getDate() + daysRemaining);

        let deliveryDate = dateNow;

        let results = [{
            "gotPregnantDate": gotPregnant.toLocaleDateString("en-US"),
            "daysPregnant": diffDays,
            "weeksPregnant": weeksPregnant,
            "remainingDays": daysRemaining,
            "remainingWeeks": weeksRemaining,
            "remainingMonths": monthsRemaining,
            "deliveryDate": deliveryDate.toLocaleDateString("en-US")
        }];


        return results;

    }

}