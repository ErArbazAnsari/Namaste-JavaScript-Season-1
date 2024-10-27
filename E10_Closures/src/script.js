function a() {
    var b = 10;

    function c() {
        console.log(b);
    }
    // b = 100
    return c;
}

var aa = a();
console.log(aa);

console.log(aa());
