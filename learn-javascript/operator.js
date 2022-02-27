/* logical operator */
console.log('logical operator && :', true && 'abc');
console.log('logical operator && :', false && 'abc');
console.log('logical operator || :', 'truong' && 'abc'); // 'truong' = true -> true && 'abc'
console.log('logical operator || :', 'truong' || 'abc'); // 'truong' = true -> true || 'abc'

console.log('logical operator ! :', !'truong'); // 'truong' = true -> !true => false
console.log('logical operator ! :', !!'truong'); // 'truong' = true -> !true -> !false => true


// ??
// true: 10, false = 20
// null, undefined  -> 10


let height = null;
// const getHeight = (height !== null && height !== undefined) ? 10 : 20;
// const getHeight = height ? 10 : 20; // -> 20
height = height ?? 10;
console.log('??: ', height)


/* operator */
console.log("operator ==: ", null == undefined); // true
console.log("operator ==: ", 20 == '30'); // 20 == Number('20') => true
console.log("operator ==: ", 1 == true); // 1 == Boolean(true) => 1 == 1 -> true
console.log("operator ==: ", 'truong' == 'truont'); // false
console.log("operator ==: ", 1 == 'truont'); // 1 == Number('truongt') -> 1 == NaN => false
console.log("operator ==: ", 'pack' == true); 
// 'pack' == Number(true)
// 'pack' == 1
// Number('pack') == 1
// NaN == 1 => false


/* operator ternay */
const isShowLoading = true;
let msgLoading = '';
if(isShowLoading) {
  msgLoading = 'show loading'
} else {
  msgLoading = 'hide loading'
}
const msgLoadingConst = isShowLoading ? 'show loading' : 'hide loading';

/* operator relational */
