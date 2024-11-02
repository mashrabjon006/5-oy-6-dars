// function abs(arr1, arr2) {
//   return arr1.filter(value => arr2.includes(value))
// }
// console.log(abs([1, 2, 3, 4], [3, 4, 5, 6]))
// 2. 
// function kpaytriw(arr, coefficient) {
//   return arr.map(value => value * coefficient)
// }
// console.log(kpaytriw([1, 2, 3, 4], 3))
// 3. 
// function yogindi(arr) {
//   return arr.filter(value => value > 0).reduce((sum, value) => sum + value, 0)
// }
// console.log(yogindi([-1, 2, 3, -4, 5]))
// 4.
// function nol(arr) {
//   let nonZero = arr.filter(value => value !== 0)
//   let zeros = arr.filter(value => value === 0)
//   return [...nonZero, ...zeros]
// }
// console.log(nol([0, 1, 0, 3, 12]))
// 5. 

  
// 7. 
// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2).filter((value, index, self) => self.indexOf(value) === index)
// }
// console.log(mergeArrays([1, 2, 3], [2, 3, 4]))
// 8. 
// function juftToq(arr) {
//   let even = arr.filter(value => value % 2 === 0)
//   let odd = arr.filter(value => value % 2 !== 0)
//   return { even, odd }
// }
// console.log(juftToq([1, 2, 3, 4, 5]))
// 9. 
// function tekwirw(arr, value) {
//   return arr.includes(value)
// }
// console.log(tekwirw([1, 2, 3, 4], 3))
// console.log(tekwirw([1, 2, 3, 4], 5))
// 10.
// function maxX(arr) {
//   return { min: Math.min(...arr), max: Math.max(...arr) }
// }
// console.log(maxX([1, 2, 3, 4, 5]))
// 11. 
// function sortObject(obj) {
//     return Object.fromEntries(Object.entries(obj).sort())
//   }
  
//   console.log(sortObject({ c: 3, a: 1, b: 2 }))
  
// 12.
// function kk(obj) {
//   return { keys: Object.keys(obj), values: Object.values(obj) }
// }
// console.log(kk({ a: 1, b: 2, c: 3 }))
// 13.

// function biraw(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }
// console.log(biraw({ a: 1, b: 2 }, { b: 3, c: 4 }))
// 14. 
// function aabbs(obj) {
//   return Object.values(obj).reduce((sum, value) => sum + value, 0)
// }
// console.log(aabbs({ a: 1, b: 2, c: 3 }))
// 15. 
// 16. 
// 17. 
// function keys(arr, key) {
//   return arr.reduce((bb, obj) => {
//     let val = obj[key];
//     bb[val] = bb[val] || [];
//     bb[val].push(obj);
//     return bb
//   }, {})
// }
// console.log(keys([{ type: "fruit", name: "apple" }, { type: "fruit", name: "banana" }, { type: "vegetable", name: "carrot" }], "type"));
// 18. 
// function arr(obj) {
//     return Object.values(obj).flat();
//   }
  
//   console.log(arr({ a: [1, 2], b: [3, 4], c: [5] }))
// 19. 
// 20. 
// function fou(obj) {
//     if (typeof obj !== 'object' || obj === null) return 0;
//     return 1 + Math.max(0, ...Object.values(obj).map(findDepth));
//   }
  
 
//   console.log(fou({ a: { b: { c: 1 } } }))
  
// 21. 
// function Palindrome(str) {
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
//   return str === str.split("").reverse().join("")
// }
// console.log(Palindrome("isj A jkafjk Isej"))
// 22. 
// function rev(sentence) {
//   return sentence.split(" ").reverse().join(" ")
// }
// console.log(rev("Hello world"))
// 23. 
// function leng(sentence) {
//     return sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest);
//   }
  

//   console.log(leng("I loke programming"))
  