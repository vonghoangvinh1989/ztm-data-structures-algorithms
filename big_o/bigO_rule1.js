const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt',
    'darla', 'hank',  'nemo'
]

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("running")
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            break;
        }
    }
}

findNemo(everyone);

// Rule 1
// Think about the worst case
// Worst case here 'nemo' at the end of the array
// So it still is O(n)