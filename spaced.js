let f, s = (require('fs').readFileSync(process.argv[2]).toString().replace(/./g, '$& '));
eval("f = (...a) => { let [$, _] = a; return eval(s); }");
console.log(f(...process.argv.slice(3)));