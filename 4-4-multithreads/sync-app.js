import itemCountSync from './sync-app-item-count.js';

const arr = [];
for (let i = 1; i <= 300000; i++) {
    arr.push(i);
}

const compute = (arr) => {
    return itemCountSync(arr);
};

const main = () => {
    performance.mark('start');
    const result = compute(arr);
    console.log(result);
    performance.mark('end');
    performance.measure('sync', 'start', 'end');
    console.log(performance.getEntriesByName('sync').pop());
};

export { main as syncApp };
