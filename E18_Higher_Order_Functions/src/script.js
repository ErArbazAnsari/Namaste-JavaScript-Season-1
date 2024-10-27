const radius = [4, 5, 2, 10, 8];

function circleArea(radius) {
    let areas = [];

    for (let i = 0; i < radius.length; i++) {
        areas.push(Math.PI * radius[i] * radius[i]);
    }

    return areas;
}

console.log(circleArea(radius));
