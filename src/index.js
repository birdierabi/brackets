module.exports = function check(str, bracketsConfig) {
  let i = 0;
  while (i < bracketsConfig.length) {
    let brackets = bracketsConfig[i].join('');
    if (str.includes(brackets)) {
      str = str.replace(brackets, '');
      i = 0;
    } else {
      i++;
    };
  };
  return str ? false : true;
}
