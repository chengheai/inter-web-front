componentDidMount = () => {
  this.setData({}); // 1
  setTimeout(() => {
    this.setData({});  // 3？
    this.setData({});  // 4？
  }, 1000);
  this.setData({});  // 2
}

/// 改变几次，先后顺序
// 执行4次，先后顺序？
