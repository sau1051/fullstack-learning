function multiply(...args) {
  return args.reduce((acc, n) => acc * n, 1);
}

console.log(multiply(2, 3, 4)); // 24