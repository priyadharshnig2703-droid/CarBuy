
task 1
const arr = [1, 2, 3, 2, 4, 5, 1, 6, 3];

const duplicates = arr.reduce((accumulator, currentValue) => {

    if (
        arr.indexOf(currentValue) !== arr.lastIndexOf(currentValue) && 
        !accumulator.includes(currentValue)
    ) {
        accumulator.push(currentValue);
    }

    return accumulator;

}, []);

console.log(duplicates);

/*task 2 */
const arr = [1, 2, 3, 2, 4, 5, 1, 6, 3];

const frequency = arr.reduce((accumulator, currentValue) => {

    if (accumulator[currentValue]) {
    accumulator[currentValue] = accumulator[currentValue] + 1;
} else {
    accumulator[currentValue] = 1;
}

    return accumulator;

}, {});

console.log(frequency);
/* task 3 */

const arr = [1, 2, 3, 2, 4, 5, 1, 6, 3];

const nonRepeated = arr.reduce((accumulator, currentValue) => {

    if (arr.indexOf(currentValue) === arr.lastIndexOf(currentValue)) {
        accumulator.push(currentValue);
    }

    return accumulator;

}, []);

console.log(nonRepeated);


/* minimum valuse using reduce()*/
const arr = [10, 5, 30, 20];

const minimum = arr.reduce((accumulator, currentValue) => {

    if (currentValue < accumulator) {
        return currentValue;
    } else {
        return accumulator;
    }

}, arr[0]);

console.log(minimum);


/*maximum valuse using reduce()*/






