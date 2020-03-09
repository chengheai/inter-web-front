function Name(str) {
  if (!str) {
    return '';
  }
  var arr = str.replace(/的\s*手\s*机/, '').split('');
  var result = '';

  for (var i = 0, l = arr.length; i < l; i++) {
    if (!result && /[\u4e00-\u9fa5]/.test(arr[i])) {
      result = arr[i];
      return result;
    }

    if (/\w/.test(arr[i])) {
      result += arr[i];
      if (result.length >= 2) {
        return result;
      }
    }
  }
  return result;
};

function getColor(name) {
  var colors = ['#FEB594', '#F57280', '#C16C84', '#6C5B7A', '#345C7D', '#14344D', '#00305A'];
  if (name.length === 2) {
    name = name[0].toLocaleLowerCase();
  }
  var aIndex = 'a'.charCodeAt(0);
  return colors[(name.charCodeAt(0) - aIndex) % colors.length];
};

var name = Name('Tedydddd');
console.log('name: ', name);
var bgColor = getColor(name);
console.log('bgColor: ', bgColor);
