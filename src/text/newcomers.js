/*************************************************************************

ES2015/ES6:
- Default parameters

- Rest/Spread for arrays

- Template literals ``

- Multi-line strings ``

- Destructuring assignment

- Arrow functions

- Promises

- Block-Scoped Constructs: Let and Const

- Classes

- Modules

- for...of



ES2016:
- Array.prototype.includes(valueToSearch, fromIndex)

- Exponentiation Operator **



ES2017: 
- Object.values, returns enumerable values, the same as for...in

- Object.entries returns array of arrays of key-value pairs

- padStart(), padEnd()

- Object.getOwnPropertyDescriptors

- Trailing Commas in Function Parameter List and Calls

- Async functions

- Shared Memory and Atomics: 
Atomics is a global variable whose methods have three main use cases:
synchronization, waiting to be notified, atomic operations.



2018:
- Lifting template literal restriction.

- Rest/Spread for objects

- Promise.prototype.finally:
The finally() method returns a Promise. When the promise is settled, 
i.e either fulfilled or rejected, the specified callback function is executed. 
This provides a way for code to be run whether the promise 
was fulfilled successfully or rejected once the Promise has been dealt with.
This helps to avoid duplicating code in both the promise's then() and catch() handlers.

- Asynchronous iteration



2019:
- Array.flat() and Array.flatMap(): 1 is default depth
flatMap is the same as .map().flat()
Infinity can be used for depth.

- Object.fromEntries()
From entries (array of 2 element arrays) creates object.

- String.trimStart() and String.trimEnd()

- Symbol.Description

- Optional Catch Binding: catch blocks without argument

- Stable Array.prototype.sort()

- Function.toString() is improved
It now returns string representation of the source code
along with new lines, white spaces and comments.



2020: 
- optional chaining ?.

- nullish coalescing operator ??
Similar to ||, it returns its right-hand side operand when its left-hand side 
operand is null or undefined, and otherwise returns its left-hand side operand.

- for...in consistency 

- globalThis

- Promise.allSettled
After all promises are settled, returns an array with status of each promise.
Promise.all reject with an error as soon as any promise is rejected.

- String.protype.matchAll

- Dynamic Import with async/await

- Bigint: new primitive type for  arbitrary precision numbers

*************************************************************************/
