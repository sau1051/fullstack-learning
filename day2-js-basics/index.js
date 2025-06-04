// ============================
// ✅ 1. Variables
// ============================
console.log("PRACTICE Variables")
let userName = "Saurabh";
const age = 30;
var city = "Mississauga";

userName = "Rahul"; // ✅ Works — reassigned

console.log(userName, age, city);

// ============================
// ✅ 2. Functions
// ============================
console.log("PRACTICE Functions")
function greet(user) {
  return "Hello, " + user;
}

const greetArrow = (user) => "Hi, " + user;

console.log(greet(userName));
console.log(greetArrow(userName));

// ============================
// ✅ 3. Arrays
// ============================
console.log("PRACTICE Arrays")
const skills = ["Java", "Git", "js", "React"];

skills.push("TypeScript");

skills.forEach(skill => {
  console.log(skill);
});

// ✅ Case-insensitive filtering: matches "Java", "js", "JS"
// ✅Rule of Thumb : Always assume string functions like startsWith(), includes(), indexOf() 
// are case-sensitive, unless you normalize the case manually using: .toLowerCase(), .toUpperCase()
const filtered = skills.filter(skill => skill.toLowerCase().startsWith("j"));
console.log("Filtered (starts with j):", filtered); // Output: ["Java", "js"]


/// ============================
// ✅ 4. Objects
// ============================
console.log("PRACTICE Objects")
const user = {
  userName: "Saurabh",      // String value
  age: 30,                  // Number value
  skills: skills,           // Reference to the skills array
};

console.log(user.userName);              // Output: Saurabh
console.log(user["age"]);                // Output: 30
console.log(user.skills.join(", "));     // Output: Java, Git, js, React, TypeScript

// ============================
// ✅ 5. Loops
// ============================
console.log("PRACTICE LOOP1")
for (let i = 0; i < skills.length; i++) {
  console.log(`Skill ${i + 1}: ${skills[i]}`); 
  // Output: Skill 1: Java, Skill 2: Git, etc.
}

console.log("PRACTICE LOOP2")
for (let skill of skills) {
  console.log("Using for..of:", skill); 
  // Output: Using for..of: Java, etc.
}

// ============================
// 🧪 Practice Function
// ============================
console.log("PRACTICE Function")
function describeUser(userObj) {
  console.log("Name:", userObj.userName); // Accesses the 'userName' property → Output: Name: Saurabh
  console.log("Age:", userObj.age);       // Accesses the 'age' property → Output: Age: 30

  // `userObj.skills` is an array (e.g., ["Java", "Git", "JS"])
  // `.join(", ")` converts the array into a string, with commas in between
  // Example: ["Java", "Git", "JS"] => "Java, Git, JS"
  console.log("Skills:", userObj.skills.join(", ")); // Output: Skills: Java, Git, js, React, TypeScript
}

describeUser(user); // Calls the function with the 'user' object

