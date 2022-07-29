// Language: javascript
// Path: workers/worker.js
// First worker
`use strict`;

let workerFns = {};

add = ({ a, b }) => {
  return a + b;
};

multiply = ({ a, b }) => {
  return a * b;
};

pow = ({ a, b }) => {
  return Math.pow(a, b);
};

workerFns.add = add;
workerFns.multiply = multiply;
workerFns.pow = pow;

// export the workerFns
module.exports = workerFns;