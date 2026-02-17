{/* 
- You are given an array of product objects, where each object contains a `name` and a `price`.
- Write a function `sortProductsByPrice(products)` that sorts this array of products in ascending order based on their price **using the bubble sort algorithm**.
- Return the sorted array
*/}

function sortProductsByPrice(products) {
  
  let temp;
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].price > products[j+1].price) {
        temp = products[j]
        products[j] = products[j+1]
        products[j+1] = temp
      }
    }
  }
  return products
}

//  ทำได้จากการดูสิ่งที่ตัวเองเคยจดเอาไว้ครับ ไม่งั้นข้อนี้ ผมสามารถเขียนเองสุดได้แค่ บรรทัดที่ 13 แล้วจำไม่ได้ว่าเขียนยังไงต่อ
// BigO ข้อนี้ควร้เป็น O(n2) หรือ O nกำลัง2 ครับ เพราะมีการใช้ loop ซ้อน Loop ( O(n) x O(n) = O(n2) )

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
