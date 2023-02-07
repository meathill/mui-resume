#!/usr/bin/env node

const { promisify } = require('util');
const { resolve } = require('path');
const exec = promisify(require('child_process').exec);

(async () => {
  const from = resolve(__dirname, '../node_modules/bootstrap-icons/icons');
  const to = resolve(__dirname, '../assets/bs-icons');
  await exec(`ln -s ${from} ${to}`);
})();
