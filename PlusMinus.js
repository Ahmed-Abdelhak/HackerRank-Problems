function plusMinus(arr) {

    let plusCounter = 0;
    let  minusCounter = 0;
    let  zeroCounter = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > 0) {
            plusCounter++;
        }
        else if (arr[i] < 0) {
            minusCounter++;
        }
        else {
            zeroCounter++;
        }
    }
    console.log(plusCounter / arr.length);
    console.log(minusCounter / arr.length);
    console.log(zeroCounter / arr.length);
}

module.exports.plusMinus = plusMinus;
