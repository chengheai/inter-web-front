let data =[
  {node_id: 1, parent_id: 0, name: 'a'},
  {node_id: 1, parent_id: 1, name: 'b'},
  {node_id: 2, parent_id: 2, name: 'c'},
  {node_id: 1, parent_id: 3, name: 'd'},
  {node_id: 2, parent_id: 4, name: 'e'},
  {node_id: 1, parent_id: 5, name: 'f'}
]
function setTreeData(source){
  let cloneData = JSON.parse(JSON.stringify(source))    // 对源数据深度克隆
  let tree = cloneData.filter(father=>{              //循环所有项
      let children = cloneData.filter(child=>{
          return father.node_id == child.parent_id      //返回每一项的子级数组
      });
      if(children.length>0){
          father.children = children;    //如果存在子级，则给父级添加一个children属性，并赋值
      }
      return father.parentId==0;      //返回第一层
  });
  return tree     //返回树形数据
}
setTreeData(data);