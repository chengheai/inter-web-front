let arr1 = [
  { a: 1, b: 1 },
  { a: 2, b: 2 }
]

let arr2 = [{ c: 1 }, { c: 2 }, { c: 3 }, { c: 4 },{ c: 5 }]

let result = []
let len = Math.floor(arr2.length / arr1.length)
let step =0
arr2.forEach((item,index) =>{
  if(index >= (step +1)*len){
    step +=1
  }
  result.push({
    ...(arr1[step] ?arr1[step]: arr1[0]),
    ...item
  })
})
    let newData = {}
    result.forEach(e => {
      //新建属性名
      if (Object.keys(newData).indexOf('' + e.a) === -1) {
        newData[e.a] = []
      }
      //对应插入属性值
      newData[e.a].push(e)
    })
    console.log(Object.values(newData));
// console.log(result)