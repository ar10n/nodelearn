import addNums from './modules/add.js';
import subNums from './modules/sub.js';
import multNums from './modules/mult.js';
import divNums from './modules/div.js';
import events from 'events';

const myEmmiter = new events.EventEmitter();
const [ exec, file, firstNum, secondNum, operation ] = process.argv;

myEmmiter.on('add', (firstNum, secondNum) => {
    console.log(addNums(+firstNum, +secondNum));
});

myEmmiter.on('sub', (firstNum, secondNum) => {
    console.log(subNums(+firstNum, +secondNum));
});

myEmmiter.on('mult', (firstNum, secondNum) => {
    console.log(multNums(+firstNum, +secondNum));
});

myEmmiter.on('div', (firstNum, secondNum) => {
    console.log(divNums(+firstNum, +secondNum));
});

if (!isNaN(+firstNum) && !isNaN(+secondNum)) {
    if (operation === 'add' || operation === 'div' || operation === 'sub' || operation === 'mult') {
        myEmmiter.emit(operation, firstNum, secondNum);
    } else {
        console.log('Неверная операция.');
    }
} else {
    console.log('Введены не числа.');
}

myEmmiter.removeAllListeners();
