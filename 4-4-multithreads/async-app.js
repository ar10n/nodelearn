import { Worker } from 'worker_threads';

const arr = [];
for (let i = 1; i <= 300000; i++) {
    arr.push(i);
}

const slicedArray = [];
const arrSize = arr.length / 6;
for (let i = 0; i < arr.length; i += arrSize) {
    slicedArray.push(arr.slice(i, i + arrSize));
}

const compute = (array) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            }
        });

        worker.on('message', (msg) => {
            resolve(msg);
        });
        worker.on('error', err => reject(err));
    });
};


const main = async () => {
    performance.mark('start');
    await Promise.all([slicedArray.map(item => compute(item))]);
    performance.mark('end');
    performance.measure('async', 'start', 'end');
    console.log(performance.getEntriesByName('async').pop());
};

export { main as asyncApp };
