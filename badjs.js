function badarg(amount) {
    return amount ** 2;
}

console.log(badarg(10));      // 100
console.log(badarg("10"));    // 100
console.log(badarg("1,000")); // NaN