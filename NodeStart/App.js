'use strict';
const fn = (par1, par2) => callback => callback(par1, par2);

const sum = (par3, par4) => par3 + par4;

fn(2, 5);
console.log(fn(sum));
