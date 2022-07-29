const path = require('path');
const Piscina = require('piscina');

// declare a new piscina instance for timer
const timerName = 'piscina-timer';

// create a new piscina instance
const piscina = new Piscina({
  filename: path.resolve(__dirname, 'workers', 'worker.js')
});

// start the timer
console.time(timerName);

(async function() {
  const res = await Promise.all([
    piscina.run({ a: 1, b: 2 }, { name: 'add' }),
    piscina.run({ a: 1, b: 2 }, { name: 'multiply' }),
    piscina.run({ a: 2, b: 2 }, { name: 'pow' }),
  ]);

  console.log(res, '::res::');

  // stop the timer
  console.timeEnd(timerName);
})();