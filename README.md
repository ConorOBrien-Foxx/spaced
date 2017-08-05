# Spaced

This is just javascript, with two exceptions:

 1. The entire code is surrounded with `f = (...a) => { let [$, _] = a; ... }`, and takes all the command line arguments after the file name as arguments (the result of this is implicitly displayed);
 2. and a space is inserted after every character.

This makes it a little difficult to program in, since you can't use `for`, `while`, `function`, `=>`, or any similar token. For example, the program `a=3+4;a+5` would be transformed to `a = 3 + 4 ; a + 5 `.

## Command line invocation

    node spaced.js <filename> [args]