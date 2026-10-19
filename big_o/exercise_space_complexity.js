function booooo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log('boooooo!')
    }
}

booooo([1, 2, 3, 4, 5]) // space complexity O(1)

function arrayOfHiNTimes(n) {
    let hiArray = [];

    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray;
}

print(arrayOfHiNTimes(6)); // space complexity O(n)