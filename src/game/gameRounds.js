import roundPrint from './roundPrint.js';

export default function gameRounds(carArr, strArr) {
    for(let car = 0; car < carArr.length; car++) {
        roundPrint(carArr, strArr, car);
    }
}