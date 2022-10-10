import pkg from 'node-notifier';

const [executor, file, hours, minutes, seconds] = process.argv;

const milliseconds = Number(hours.slice(0, -1)) * 3600000 +
    Number(minutes.slice(0, -1)) * 60000 +
    Number(seconds.slice(0, -1)) * 1000;

setTimeout(() => {
    console.log('Звонок завершен.');
    pkg.notify('Звонок завершен.');
}, milliseconds);