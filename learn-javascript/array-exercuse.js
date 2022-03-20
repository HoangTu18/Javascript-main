/* ===== reduce ==== */

/* Baitap1 
Counting values in an object
input: ['truong', 'thuan', 'tu', 'nam', 'thuan', 'thuan', 'tu']
output: { 'truong': 1, 'thuan': 3, 'tu': 2, 'nam': 1}
*/


/* Baitap2
remove duplicate items in array
input: ['truong', 'thuan', 'tu', 'nam', 'thuan', 'thuan', 'tu']
output: ['truong', 'thuan', 'tu', 'nam']
*/

/* Baitap3
group objects by a property
input: [
  { name: 'truong', age: 20 },
  { name: 'tu', age: 15 },
  { name: 'thuan', age: 30 },
  { name: 'nam', age: 20 },
  { name: 'minh', age: 15 },
]
output: {
  20: [
    { name: 'truong', age: 20 },
    { name: 'nam', age: 20 },
  ],
  15: [
    { name: 'tu', age: 15 },
    { name: 'minh', age: 15 },
  ],
  30: [
    { name: 'thuan', age: 15 }
  ],
}
*/