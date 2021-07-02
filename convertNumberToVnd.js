const convertNumberToVnd = (number) => {
    if (typeof number !== 'number') {
        return null;
    }
    const str = number.toString();
    const newStr = str.split('').reverse().reduce((repo, currentValue, currentIndex) => {
        return (currentIndex % 3 === 0) ? ((currentIndex === 0) ? `${repo}${currentValue}`: `${repo}.${currentValue}`) :`${repo}${currentValue}`;
    }, '');

    return newStr.split('').reverse().join('');
}

module.exports = convertNumberToVnd;