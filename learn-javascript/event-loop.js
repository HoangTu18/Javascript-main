const foo = () => console.log("foo");
const promise1 = new Promise(resovle => setTimeout(() => resovle('promise1'), 2000));
const promise2 = new Promise(resovle => resovle('promise2'));
const bar5 = () => setTimeout(() => console.log("bar5"), 500);
const bar0 = () => setTimeout(() => console.log("bar0"), 0);
const bar10 = () => setTimeout(() => console.log("bar10"), 1000);
const baz = () => console.log("baz");

promise1.then(value => console.log(value))
promise2.then(value => console.log(value))
bar0();
bar10();
bar5();
foo();
baz();

// macro tasks queue -> setTimeout, setInterval ...
// micro tasks queue -> Promise ...
// priority => micro tasks -> macro tasks