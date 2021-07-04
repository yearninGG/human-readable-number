module.exports = function toReadable (number) {
    number = String(number);
    let initLen = number.length;

    if (number.length === 1) {
        return digitsOfOnes(number);

    } else if (number.length === 2) {
        return digitsOfTens(number);

    } else {
        return digitsOfHundreds(number);
    }


    function digitsOfOnes(digit) {
        let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];

        for (let i = 0; i < arr.length; i++) {
            if (+digit === i) {

                if (i === 0 && initLen !== 1) return '';
                else return arr[digit];
            }
        }
    }


    function digitsOfTens(digit) {
        if (specialCase(digit)) {
            let arr = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

            for (let i = 1; i <= arr.length; i++) {
                if (+digit[1] === i) return arr[i - 1];
            }
        } else {
            let arr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
            for (let i = 1; i <= arr.length; i++) {
                if (+digit[0] === i) {

                    if (+digit[1] === 0) {
                        return arr[i - 1];

                    } else {
                        return arr[i - 1] + ' ' + digitsOfOnes(digit[1]);
                    }
                }
            }
        }
    }


    function digitsOfHundreds(digit) {
        let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',];

        for (let i = 0; i <= arr.length; i++) {
            if (+digit[0] === i) {

                if (+digit[1] === 0 && +digit[2] === 0) {
                    return arr[i - 1] + ' hundred';

                } else if (+digit[1] !== 0) {
                    return arr[i - 1] + ' hundred ' + digitsOfTens(digit.slice(1));

                } else {
                    return arr[i - 1] + ' hundred ' + digitsOfOnes(digit[2]);
                }
            }
        }
    }

    function specialCase(number) {
        return (+number[0] === 1 && +number[1] >= 1 && +number[1] <= 9);
    }
}
