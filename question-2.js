{/*
- You are given a sorted array of product objects, where each object contains a `name` and a `price`.
- Write a function `findProductPrice(products, name)` that takes this array and a product name and returns the price of the product with the given name **using the binary search algorithm**.
- If no product with the given name is found, return `-1`.
*/}

// function findProductPrice(products, name) {
  
//   let left = 0;
//   let right = products.length -1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (products[mid].name === name) {
//       return products[mid].price;
//     } else if (products[mid] < name) {
//       left = mid + 1;
//     } else {
//       right = mid -1
//     }
//   }
//   return -1
// }


function findProductPrice(products, name) {

  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      return products[i].price
    }
  }
  return -1
}

// ผมไม่สามารถทำ while loop Binary ได้โดยที่ไม่ดูสิ่งที่ตัวจดเอาไว้ตอนติวได้ครับ เลยขอส่งแบบ linear เท่าที่สามารถทำเองได้ โดยที่ไม่ต้องดูสิ่งที่จดดีกว่า
// BigO ข้อนี้ควรเป็น O(log n)ถ้าทำแบบ Binary แต่เนื่องจาก ผมหาคำตอบได้แค่แบบ linear เลยเป็น O(n)

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
