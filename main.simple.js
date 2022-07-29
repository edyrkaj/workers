// declare a new piscina instance for timer
const timerName = 'no-piscina-timer';

// start the timer
console.time(timerName);

(async function () {
  const add = ({ a, b }) => a + b;
  const multiply = ({ a, b }) => a * b;
  const pow = ({ a, b }) => Math.pow(a, b);

  const res = await Promise.all([
    add({ a: 1, b: 2 }),
    multiply({ a: 1, b: 2 }),
    pow({ a: 2, b: 2 }),
  ]);

  console.log(res, '::res::');

  // stop the timer
  console.timeEnd(timerName);
})();