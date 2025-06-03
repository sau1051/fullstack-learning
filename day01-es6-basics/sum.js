function sum(...args) {
  return args.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3)); // 6