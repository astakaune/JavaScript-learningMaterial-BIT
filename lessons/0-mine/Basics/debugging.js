console.log("---DEBUGGING---");
console.log("---console.log()---");
console.log(" ");
console.log("---setting Breakpoints---");
/*
In the debugger window, you can set breakpoints in the JavaScript code.
At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.
After examining values, you can resume the execution of code (typically with a play button).
*/
console.log(" ");
console.log("---debugger Keyword---");
/*
The debugger keyword stops the execution of JavaScript, and calls (if available) the debugging function.
This has the same function as setting a breakpoint in the debugger.
*/
console.log("---ex1---");
const x = 15 * 5;
debugger;
console.log(x);
