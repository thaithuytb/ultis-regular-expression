const convertVndToNumber = (vnd) => {
    if (typeof vnd !== 'string') {
        return null;
    }
    return new Number(vnd.replace(/[\. -]*/g, ''));
}

module.exports = convertVndToNumber;