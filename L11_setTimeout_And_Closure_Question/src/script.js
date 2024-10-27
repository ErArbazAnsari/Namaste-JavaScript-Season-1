// function a() {
//     let i = 0;
//     setTimeout(() => {
//         console.log("Hello, JavaScript: ");
//     }, 3000);
//     console.log("Arbaz");
// }
// a();

// function a() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(() => {
//             console.log("Hello, JavaScript: ", i);
//         }, i * 1000);
//     }
//     console.log("Arbaz");
// }
// a();

function a() {
    for (var i = 1; i <= 5; i++) {
        function close(x) {
            setTimeout(() => {
                console.log("Hello, JavaScript: ", x);
            }, i * 1000);
        }
        close(i);
    }
    console.log("Arbaz");
}
a();
