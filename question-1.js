{/*
- You are given an array of student objects, where each object contains an `id` and a `name`.
- Write a function `findStudentById(students, id)` that takes this array and a student ID and returns the student object with the matching ID **using the linear search algorithm**.
- If no student with the given ID is found, return `null`.
*/}

function findStudentById(students, id) {
  
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      // return [`id: ${students[i].id} , name: ${students[i].name}`]
      return students[i]
    }
  }
  return null
}
//  bigO ข้อนี้ เท่ากับ O(n) เพราะเป็น loop ชั้นเดียว

// Test case
const students = [
  { id: 302, name: "Emily Carter" },
  { id: 105, name: "Michael Johnson" },
  { id: 501, name: "Sarah Wilson" },
  { id: 207, name: "Daniel Brown" },
  { id: 403, name: "Sophia Martinez" },
];

console.log(findStudentById(students, 302)); // Output: { id: 302, name: "Emily Carter" }
console.log(findStudentById(students, 4)); // Output: null
