// 绑定获取设置 清除历史记录的三个方法 key: 组件的name , queryData:查询条件, pager : 分页条件
// 取query
Vue.prototype.getHistory = (key, callback) => {
  let historyItem = sessionStorage.getItem("history") ? JSON.parse(sessionStorage.getItem("history"))[key] : {}
  callback(historyItem || {})
};
// 设置query
Vue.prototype.setHistory = (key, queryData, pager) => {
  let history = sessionStorage.getItem("history") ? JSON.parse(sessionStorage.getItem("history")) : {}
  let search = {
    [key]: {
      queryData: { ...queryData },
      pager: { ...pager }
    }
  }
  Object.assign(history, search)
  sessionStorage.setItem("history", JSON.stringify(history))
};
Vue.prototype.removeHistory = () => {
  sessionStorage.removeItem("history")
};
