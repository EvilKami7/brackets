module.exports = function check(str, bracketsConfig) {
    let isReplaced = true;
    while (isReplaced) {
        isReplaced = false;
        for (let i = 0; i < bracketsConfig.length; i++) {
            str = str.replace(bracketsConfig[i][0] + bracketsConfig[i][1], () => {isReplaced = true; return ''});
        }
    }
    return str.length === 0;
}

