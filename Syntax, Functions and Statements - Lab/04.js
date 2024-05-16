function calculate(arg) {
    let type = typeof (arg);
    let result = 0;

    if (type === 'number') {
        result = Math.pow(arg, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}