import pkg from 'node-notifier';

const [executor, file, hours, minutes, seconds] = process.argv;

const milliseconds = +hours.slice(0, -1) * 3600000 + +minutes.slice(0, -1) * 60000 + +seconds.slice(0, -1) * 1000;

setTimeout(() => {
    console.log('Звонок завершен.');
    pkg.notify('Звонок завершен.');
}, milliseconds);