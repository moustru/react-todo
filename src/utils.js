export const generateId = len => {
  let str = '';

  for (let i = 0; i < len; i++) {
    let codeNum = Math.floor(Math.random() * 122);

    str += String.fromCharCode(codeNum > 48 ? codeNum : codeNum + 48);
  }

  return str;
};
