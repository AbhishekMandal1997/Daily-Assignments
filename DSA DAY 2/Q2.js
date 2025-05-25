    // Group Anagrams
    // Given an array of strings, group all anagrams together


    let A = ['man', "cat", "racecar", "god", "act", "mess", "dog"];

    function anagramGroup(A) {
        let newA = {};
        let sol = [];

        for (let i of A) {
            let key = i.split('').sort().join('');
            if (newA[key]) {
                newA[key].push(i);

            } else {
                newA[key] = [i];
            }
        }

        for (let i in newA) {
            sol.push(newA[i]);
        }
        return sol;
    }

    console.log(anagramGroup(A));