function f(num) {
  if (num < 1) {
    return 1;
  } else {
    return f(num - 1) * num;
  }
}
console.log(f(3))
