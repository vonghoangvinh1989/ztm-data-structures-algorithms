// Rule 3: Different terms for inputs

function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    }); // O(a) --> boxes

    boxes2.forEach(function(boxes) {
        console.log(boxes);
    }); // O(b) --> boxes2
}

// O(a + b)