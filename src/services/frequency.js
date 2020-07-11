// Anger Frequency -------------
const freqAnger = (sentimentData) => {
    let out = new Array(6).fill(0); // Initializing an array of constant length with 0
    sentimentData.forEach(elem => {
        let element = elem.value.anger;
        if (element < 8) out[0]++;
        else if (element >= 8 && element < 10) out[1]++;
        else if (element >= 10 && element < 12) out[2]++;
        else if (element >= 12 && element < 14) out[3]++;
        else if (element >= 14 && element < 16) out[4]++;
        else out[5]++;
    })
    let outObj = {
        "<8": out[0],
        "8-10": out[1],
        "10-12": out[2],
        "12-14": out[3],
        "14-16": out[4],
        ">16": out[5],
    }
    return outObj;
}

const freqSad = (sentimentData) => {
    let out = new Array(5).fill(0); // Initializing an array of constant length with 0
    sentimentData.forEach(elem => {
        let element = elem.value.sad;
        if (element < 25) out[0]++;
        else if (element >= 25 && element < 30) out[1]++;
        else if (element >= 30 && element < 35) out[2]++;
        else if (element >= 35 && element < 40) out[3]++;
        else out[4]++;
    })
    let outObj = {
        "<25": out[0],
        "25-30": out[1],
        "30-35": out[2],
        "35-40": out[3],
        ">40": out[4],
    }
    return outObj;
}

const freqJoy = (sentimentData) => {
    let out = new Array(6).fill(0); // Initializing an array of constant length with 0
    sentimentData.forEach(elem => {
        let element = elem.value.joy;
        if (element < 35) out[0]++;
        else if (element >= 35 && element < 40) out[1]++;
        else if (element >= 40 && element < 45) out[2]++;
        else if (element >= 45 && element < 50) out[3]++;
        else if (element >= 50 && element < 55) out[4]++;
        else out[5]++;
    })
    let outObj = {
        "<35": out[0],
        "35-40": out[1],
        "40-45": out[2],
        "45-50": out[3],
        "50-55": out[4],
        ">55": out[5],
    }
    return outObj;
}

const freqFear = (sentimentData) => {
    let out = new Array(9).fill(0); // Initializing an array of constant length with 0
    sentimentData.forEach(elem => {
        let element = elem.value.fear;
        if (element < 6) out[0]++;
        else if (element >= 6 && element < 7) out[1]++;
        else if (element >= 7 && element < 8) out[2]++;
        else if (element >= 8 && element < 9) out[3]++;
        else if (element >= 9 && element < 10) out[4]++;
        else if (element >= 10 && element < 11) out[5]++;
        else if (element >= 11 && element < 12) out[6]++;
        else if (element >= 12 && element < 13) out[7]++;
        else out[8]++;
    })
    let outObj = {
        "<6": out[0],
        "6-7": out[1],
        "7-8": out[2],
        "8-9": out[3],
        "9-10": out[4],
        "10-11": out[5],
        "11-12": out[6],
        "12-13": out[7],
        ">13": out[8],
    }
    return outObj;
}

const freqSubjectivity = (sentimentData) => {
    let out = new Array(7).fill(0); // Initializing an array of constant length with 0
    sentimentData.forEach(elem => {
        let element = elem.value.subjectivity;
        if (element < 0.33) out[0]++;
        else if (element >= 0.33 && element < 0.35) out[1]++;
        else if (element >= 0.35 && element < 0.36) out[2]++;
        else if (element >= 0.36 && element < 0.37) out[3]++;
        else if (element >= 0.37 && element < 0.38) out[4]++;
        else if (element >= 0.38 && element < 0.39) out[5]++;
        else out[6]++;
    })
    let outObj = {
        "<0.33": out[0],
        "0.33-0.35": out[1],
        "0.35-0.36": out[2],
        "0.36-0.37": out[3],
        "0.37-0.38": out[4],
        "0.38-0.39": out[5],
        ">0.39": out[6]
    }
    return outObj;
}

const freqPolarity = (sentimentData) => {
    let out = new Array(7).fill(0); // Initializing an array of constant length with 0
    sentimentData.forEach(elem => {
        let element = elem.value.polarity;
        if (element < 0.07) out[0]++;
        else if (element >= 0.07 && element < 0.08) out[1]++;
        else if (element >= 0.08 && element < 0.09) out[2]++;
        else if (element >= 0.09 && element < 0.10) out[3]++;
        else if (element >= 0.10 && element < 0.11) out[4]++;
        else if (element >= 0.11 && element < 0.15) out[5]++;
        else out[6]++;
    })
    let outObj = {
        "<0.07": out[0],
        "0.07-0.08": out[1],
        "0.08-0.09": out[2],
        "0.09-0.10": out[3],
        "0.10-0.11": out[4],
        "0.11-0.15": out[5],
        ">0.15": out[6]
    }
    return outObj;
}

// Anger Frequency -------------
const freq10 = (sentimentData, type) => {
    let out = new Array(10).fill(0); // Initializing an array of constant length with 0
    sentimentData.forEach(elem => {
        let element;
        if (type === "Joy") element = elem.value.joy;
        else if (type === "Sad") element = elem.value.sad;
        else if (type === "Anger") element = elem.value.anger;
        else element = elem.value.fear;

        if (element < 10) out[0]++;
        else if (element >= 10 && element < 20) out[1]++;
        else if (element >= 20 && element < 30) out[2]++;
        else if (element >= 30 && element < 40) out[3]++;
        else if (element >= 40 && element < 50) out[4]++;
        else if (element >= 50 && element < 60) out[5]++;
        else if (element >= 60 && element < 70) out[6]++;
        else if (element >= 70 && element < 80) out[7]++;
        else if (element >= 80 && element < 90) out[8]++;
        else out[9]++;
    })
    let outObj = {
        "<10": out[0],
        "10-20": out[1],
        "20-30": out[2],
        "30-40": out[3],
        "40-50": out[4],
        "50-60": out[5],
        "60-70": out[6],
        "70-80": out[7],
        "80-90": out[8],
        "90-100": out[9],
    }
    return outObj;
}


// exporting each fn
export { freq10, freqAnger, freqSubjectivity, freqSad, freqPolarity, freqJoy, freqFear };