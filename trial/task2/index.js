module.exports = function(str) {  
  let res;
  let newStr =str;
  let [, elem, mod] = newStr.match(/[a-z]+(?:([^a-z]+)[a-z]+(?:\1)?[a-z]+)([^a-z]+)[a-z]+(?:\2)?[a-z]+/);

  while (elem == mod) {
    const regexp =  new RegExp(elem, "gi");
    res = regexp.exec(newStr);
    console.log(res.index);
    newStr = newStr.slice(res.index+1);
    console.log(newStr);
    [, elem, mod] = newStr.match(/[a-z]+(?:([^a-z]+)[a-z]+(?:\1)?[a-z]+)([^a-z]+)[a-z]+(?:\2)?[a-z]+/);
  }
  
  console.log(elem);
  const n = str.split(elem);
  const m = str.split(mod);
  console.log(elem, n, m);
  if (n.length <= m.length) {
    [elem, mod] = [mod, elem];
  }
  return {
    elem: elem,
    mod: mod
  }ж
}