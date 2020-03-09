//將秒數格式化為時分秒
function formatSeconds(value) {
  var second = parseInt(value);// 秒
  var minute = 0;// 分
  if (second > 60) {
    minute = parseInt(second / 60);
    second = parseInt(second % 60);
  }
  var result = parseInt(second) < 10 ? `0${parseInt(second)}` : parseInt(second);
  if (minute > 0) {
    result = parseInt(minute) < 10 ? `0${parseInt(minute)}` : `${parseInt(minute)}:${result}`;
  }
  return result;
}


var s = 1800;// 例如：後台得到的秒數

time();
function time() {
  console.log(formatSeconds(s));
  if (s == 0) {
    alert("時間到了！");
  } else {
    s--;
    //定時器，每秒重新計算
    setTimeout(function () {
      time();
    },
      1000)
  }
}
