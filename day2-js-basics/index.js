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
console.log("PRACTICE Functions");
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
// ✅ 6. Practice Function
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




// ============================
// ✅ 7. Template Literals
// ============================

/*
📘 What are Template Literals?

They are a cleaner, modern way to build strings using backticks (`), with support for:
- Variable interpolation (${var})
- Multi-line strings
- Embedded expressions
*/

const learner = "Dhruba";
const topic = "JavaScript ES6+";

// ❌ Old way using +
const welcomeMsg = "Welcome " + learner + ", you're learning " + topic + "!";

// ✅ Modern way using backticks
const welcomeMsgNew = `Welcome ${learner}, you're learning ${topic}!`;

console.log("Old way:", welcomeMsg);
// Output: Old way: Welcome Dhruba, you're learning JavaScript ES6+!

console.log("Template literal:", welcomeMsgNew);
// Output: Template literal: Welcome Dhruba, you're learning JavaScript ES6+!


// ============================
// ✅ Multi-line Strings
// ============================

const multiLineOld = "Line A\n" + "Line B\n" + "Line C";
console.log("Old multi-line:", multiLineOld);
// Output:
// Old multi-line: Line A
// Line B
// Line C

const multiLineNew = `
Line A
Line B
Line C
`;
console.log("New multi-line:", multiLineNew);
// Output:
// New multi-line:
// Line A
// Line B
// Line C



// ============================
// ✅ 8. Destructuring (ES6)
// ============================

/*
📘 What is Destructuring?

Destructuring lets you extract values from arrays or objects into separate variables
in a clean, readable way.

Supports:
- Partial selection
- Skipping items (arrays)
- Default values
- Renaming (objects)
*/


// ============================
// ✅ Array Destructuring
// ============================

const techStack = ["HTML", "CSS", "JavaScript"];

// ✅ Destructure only first two
const [firstTech, secondTech] = techStack;
console.log(firstTech);  // Output: HTML
console.log(secondTech); // Output: CSS

// ✅ Skipping items (skip CSS)
const [html, , js] = techStack;
console.log("Skipped 2nd:", html, js); // Output: Skipped 2nd: HTML JavaScript

// ✅ Default values (in case element is missing)
const [a, b, c, d = "Node.js"] = techStack;
console.log("Default fallback:", d); // Output: Default fallback: Node.js



// ============================
// ✅ Object Destructuring
// ============================

const developer = {
  devName: "Saurabh",
  experience: 5,
  location: "Mississauga",
};

// ✅ Partial destructuring
const { devName, experience } = developer;
console.log(devName); // Output: Saurabh

// ✅ Renaming keys while destructuring
const { location: devCity } = developer;
console.log(devCity); // Output: Mississauga

// ✅ Non-existent key without default values
const { testKey } = developer;
console.log(testKey); // Output: undefined

// ✅ Default value for non-existent key
const { salary = "Not disclosed" } = developer;
console.log(salary); // Output: Not disclosed

// ✅ Combined example
const {
  devName: name,
  experience: years,
  location: newCity,
  tech = "Full Stack"
} = developer;

console.log(name, years, newCity, tech);
// Output: Saurabh 5 Mississauga Full Stack




// ============================
// ✅ 9. Spread & Rest Operators
// ============================

/*
📘 What is the `...` operator?

It's used in two different ways:

1. Spread — to expand values
2. Rest — to collect values
*/


// ============================
// ✅ Spread with Arrays
// ============================

const core = ["HTML", "CSS"];
const extended = [...core, "JS", "React"]; // spreading 'core'

console.log("Extended Stack:", extended);
// Output: Extended Stack: [ 'HTML', 'CSS', 'JS', 'React' ]

// ✅ Copy array safely
const copy = [...extended];
console.log("Copied:", copy);
// Output: Copied: [ 'HTML', 'CSS', 'JS', 'React' ]


// ============================
// ✅ Spread with Objects
// ============================

const original = { name: "Saurabh", role: "Dev" };
const updated = { ...original, role: "Full Stack Dev", city: "Mississauga" };

console.log("Updated object:", updated);
// Output: { name: 'Saurabh', role: 'Full Stack Dev', city: 'Mississauga' }


// ============================
// ✅ Rest with Arrays
// ============================

const [lead, ...others] = ["Saurabh", "Dhruba", "Ankit"];
console.log("Lead:", lead);     // Output: Lead: Saurabh
console.log("Others:", others); // Output: Others: [ 'Dhruba', 'Ankit' ]


// ============================
// ✅ Rest with Functions
// ============================

function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

console.log("Sum:", sumAll(10, 20, 30)); // Output: Sum: 60

// Another example: log all skills
function listSkills(title, ...skills) {
  console.log(title + ": " + skills.join(", "));
}

listSkills("Top Skills", "Java", "Git", "React");
// Output: Top Skills: Java, Git, React




// ============================
// ✅ 10. Default Parameters
// ============================

/*
📘 What are Default Parameters?

Default values kick in when a function argument is missing or undefined.
This makes your functions more robust.
*/

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Saurabh");  // Output: Hello, Saurabh!
greet();           // Output: Hello, Guest!


function calculateBill(amount, taxRate = 0.1) {
  const total = amount + amount * taxRate;
  console.log(`Total bill: $${total}`);
}

calculateBill(100, 0.2);  // Output: Total bill: $120
calculateBill(100);       // Output: Total bill: $110


// ✅ Works with destructuring too
function printUser({ name = "Anonymous", city = "Unknown" }) {
  console.log(`${name} from ${city}`);
}

printUser({ name: "Dhruba", city: "Toronto" }); // Output: Dhruba from Toronto
printUser({});                                  // Output: Anonymous from Unknown


// ============================
// ✅ Rest + Default Parameters
// ============================

/*
This function applies a tax to a list of item prices,
with a default tax rate if none is provided.
*/

function calculateTotal(taxRate = 0.1, ...prices) {
  const subtotal = prices.reduce((acc, price) => acc + price, 0);
  const total = subtotal + subtotal * taxRate;
  console.log(`Subtotal: $${subtotal}, Tax: ${taxRate * 100}%, Total: $${total}`);
}

calculateTotal(0.2, 100, 50, 25); 
// Output: Subtotal: $175, Tax: 20%, Total: $210

calculateTotal(undefined, 80, 20); 
// Output: Subtotal: $100, Tax: 10%, Total: $110

calculateTotal(); 
// Output: Subtotal: $0, Tax: 10%, Total: $0



// ============================
// ✅ 11. Object Enhancements (ES6)
// ============================

/*
📘 Object Enhancements include:
- Shorthand properties
- Shorthand methods
- Computed property keys
*/


// ✅ Shorthand Properties
const title = "Developer";
const location = "Mississauga";

// ❌ Old way
const user1 = {
  title: title,
  location: location
};

// ✅ Shorthand way (same name = one word)
const user2 = {
  title,
  location
};

console.log("User 2:", user2);
// Output: User 2: { title: 'Developer', location: 'Mississauga' }


// ✅ Shorthand Methods

const utils = {
  greet(name) {
    return `Hello, ${name}!`;
  }
};

console.log(utils.greet("Saurabh")); 
// Output: Hello, Saurabh!


// ✅ Computed Property Keys

const dynamicKey = "status";
const user3 = {
  name: "Dhruba",
  [dynamicKey]: "active"
};

console.log(user3);
// Output: { name: 'Dhruba', status: 'active' }
