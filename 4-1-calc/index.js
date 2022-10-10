import add from './modules/add.js';
import sub from './modules/sub.js';
import mult from './modules/mult.js';
import div from './modules/div.js';

const [exec, file, firstArg, secondArg, operation] = process.argv;

const firstNum = Number(firstArg);
const secondNum = Number(secondArg);

const main = () => {
    if (!isNaN(firstNum) && !isNaN(secondNum)) {
        switch (operation) {
            case 'add':
                console.log(add(firstNum, secondNum));
                break;
            case 'sub':
                console.log(sub(firstNum, secondNum));
                break;
            case 'mult':
                console.log(mult(firstNum, secondNum));
                break;
            case 'div':
                console.log(div(firstNum, secondNum));
                break;
            default:
                console.log('Ошибка! Введена некорректная математическая операция.')
        }
    } else {
        console.log('Ошибка! Введены не числа.');
    }
};

main();