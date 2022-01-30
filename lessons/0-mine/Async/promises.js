console.log(" ");
console.log("-------Promises------");
/*"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code */
console.log("-----Promise Object-----");
// Promise Syntax:
let myPromise = new Promise(function (myResolve, myReject) {
// "Producing Code" (May take some time)
	myResolve(); // when successful
	myReject(); // when error
});
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
	function (value) {
		/* code if successful */
	},
	function (error) {
		/* code if some error */
	}
);
// When the producing code obtains the result, it should call one of the two callbacks:
// Result	Call
// Success	myResolve(result value)
// Error	myReject(error object)


console.log(" ");
console.log("-----Promise Object Properties-----");
/*A JS Promise object can be:
	Pending
	Fulfilled
	Rejected
The Promise object supports two properties: state and result.
While a Promise object is "pending" (working), the result is undefined.
When a Promise object is "fulfilled", the result is a value.
When a Promise object is "rejected", the result is an error object.

myPromise.state		myPromise.result
"pending"			undefined
"fulfilled"			a result value
"rejected"			an error object

You cannot access the Promise properties state and result.
You must use a Promise method to handle promises.

*/