function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    var prevVal1 = 0;
    var preVal2 = 1;
    var currentVal = 0;
    for (var i = 2; i <= n; i++) {
        currentVal = prevVal1 + preVal2;
        prevVal1 = preVal2;
        preVal2 = currentVal;
    }
    return currentVal;
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(6));
