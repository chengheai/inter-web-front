async function f1() {
  console.log(1)
}
f1()
  .then(res => {
    console.log(res)
    return 1;
  })
  .then(res => {
    console.log(res)
  })
