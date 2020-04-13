function sum(n) {
  console.log(n)
  if (n === 1) return 1
  return sum(n - 1) + n
}
sum(10)
