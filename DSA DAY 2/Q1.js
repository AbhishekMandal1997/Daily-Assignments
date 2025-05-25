// Find the First Non-Repeating Character in a String
// Return the character or 1 if none found

const S = "aaabbcddeefggg"
function firstNonRepeatinigChar(S) {
    const count = {};

    for (let i of S) {
        if (count[i]) {
            count[i]++;
        } else {
            count[i] = 1;
        }
    }

    for (let i of S) {
        if (count[i] === 1) {
            return i;
        }
    }
    return 1;
}

console.log(firstNonRepeatinigChar(S));
