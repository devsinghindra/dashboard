//utilitis function

// Weekly Data Output
function getWeekData(sentimentData) {
    let weekData = [];
    let week = 1;
    for (let i = 0; i < sentimentData.length; i = i + 7) {
        let fear = 0, anger = 0, sad = 0, joy = 0, subjectivity = 0, polarity = 0;

        for (let j = i; j < i + 7 && j < sentimentData.length; j++) {
            fear = fear + sentimentData[j].value.fear;
            anger = anger + sentimentData[j].value.anger;
            sad = sad + sentimentData[j].value.sad;
            joy = joy + sentimentData[j].value.joy;
            subjectivity = subjectivity + sentimentData[j].value.subjectivity;
            polarity = polarity + sentimentData[j].value.polarity;
        }
        let x = {
            "week": week,
            "anger": anger / 7,
            "sad": sad / 7,
            "joy": joy / 7,
            "fear": fear / 7,
            "subjectivity": subjectivity / 7,
            "polarity": polarity / 7
        }
        week++;
        weekData.push(x);
    }
    return weekData;  // Output the data
}

// Monthly Data output
function getMonthData(sentimentData) {
    let monthData = [];
    let months = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = 0;
    // //Storing 'March' Data
    let fear = 0, anger = 0, sad = 0, joy = 0, subjectivity = 0, polarity = 0;
    for (let i = 0; i < 9; i++) {
        fear = fear + sentimentData[i].value.fear;
        anger = anger + sentimentData[i].value.anger;
        sad = sad + sentimentData[i].value.sad;
        joy = joy + sentimentData[i].value.joy;
        subjectivity = subjectivity + sentimentData[i].value.subjectivity;
        polarity = polarity + sentimentData[i].value.polarity;
    };
    monthData.push({
        "Month": months[month],
        "anger": anger / 9,
        "sad": sad / 9,
        "joy": joy / 9,
        "fear": fear / 9,
        "subjectivity": subjectivity / 9,
        "polarity": polarity / 9
    });
    month++;
    // Storing Rest Month in 30,31 order--------
    let check = true; // 0 for 30day month ,1 for 31 day month
    for (let i = 9; i < sentimentData.length;) {
        let fear = 0, anger = 0, sad = 0, joy = 0, subjectivity = 0, polarity = 0;

        if (check) {  // Mean 30 day month
            for (let j = i; j < i + 30 && j < sentimentData.length; j++) {
                fear = fear + sentimentData[j].value.fear;
                anger = anger + sentimentData[j].value.anger;
                sad = sad + sentimentData[j].value.sad;
                joy = joy + sentimentData[j].value.joy;
                subjectivity = subjectivity + sentimentData[j].value.subjectivity;
                polarity = polarity + sentimentData[j].value.polarity;
            }
            monthData.push({
                "Month": months[month],
                "anger": anger / 30,
                "sad": sad / 30,
                "joy": joy / 30,
                "fear": fear / 30,
                "subjectivity": subjectivity / 30,
                "polarity": polarity / 30
            })
            i = i + 30;
            month++;
            check = false;
        }
        else { // Mean month is of 31
            for (let j = i; j < i + 31 && j < sentimentData.length; j++) {
                fear = fear + sentimentData[j].value.fear;
                anger = anger + sentimentData[j].value.anger;
                sad = sad + sentimentData[j].value.sad;
                joy = joy + sentimentData[j].value.joy;
                subjectivity = subjectivity + sentimentData[j].value.subjectivity;
                polarity = polarity + sentimentData[j].value.polarity;
            }
            monthData.push({
                "Month": months[month],
                "anger": anger / 31,
                "sad": sad / 31,
                "joy": joy / 31,
                "fear": fear / 31,
                "subjectivity": subjectivity / 31,
                "polarity": polarity / 31
            });
            i = i + 31;
            month++;
            check = true;
        }
    };
    return monthData;
}

// function getEmotionFrequencyData(sentimentData){
//     let frequency=[];
//     for(let i=0;i<10;i++){
//         frequency.push({
//             joy:0,
//             fear:0,
//             anger:0,
//             sad:0
//         });
//     }
//     //getting frequency of emotion in ranges of 10 percentage

//     for(let i=0;i<sentimentData.length;i++){
//         for (const key in sentimentData[i].value) {
//             if (object.hasOwnProperty(key)) {
//                 const element = object[key];

//             }
//         }
//     }
// }

export { getWeekData, getMonthData };