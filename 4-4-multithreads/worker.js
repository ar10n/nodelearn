import { parentPort, workerData } from 'worker_threads';

const itemCountAsync = ({ array }) => {
    let nums = 0;
    array.forEach((item) => {
        if (item % 3 === 0) {
            nums++;
        };
    });
    return nums;
};

parentPort.postMessage(itemCountAsync(workerData));