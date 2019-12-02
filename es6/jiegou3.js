
const fun = ({props}) => {
  console.log(props.title) // 12
}
let obj = {
  props: {
    title: 12
  }
}
fun(obj)
