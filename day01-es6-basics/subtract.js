function subtract(...args) {
  return args.reduce((acc, n) => acc - n);
}

console.log(subtract(10, 2, 3)); // 5