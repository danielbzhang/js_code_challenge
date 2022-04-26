const findSum = function (array) {
  // your code here - don't forget to return a number!
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const findFrequency = function (array) {
  // your code here - don't forget to return an object!
  let counts = {};
  let result = {};
  let lst = [];
  for (let i = 0; i < array.length; i++) {
    counts[array[i]] = counts[array[i]] ? counts[array[i]] + 1 : 1;
  }

  lst = Object.values(counts);

  let max = Math.max(...lst);
  let min = Math.min(...lst);

  for (const [key, value] of Object.entries(counts)) {
    if (value === max) {
      result["most"] = key;
    }
    if (value === min) {
      result["least"] = key;
    }
  }
  return result;
};

const isPalindrome = function (str) {
  // your code here - don't forget to return a boolean!
  const str1 = str.split("").reverse().join("");
  return str.toLowerCase() === str1.toLowerCase() ? true : false;
};

const largestPair = function (array) {
  // your code here - don't forget to return a number!
//   if (array.length === 1) {
//     return array[0];
//   } else if (array.length === 2) {
//     return array[0] * array[1];
//   } else if (array.length > 2) {
//     for (let i in array) {
//       let max = array[0] * array[1];
//       if 
//     }
//   }
};

const removeParenth = function (str) {
  // your code here - don't forget to return a string!
  let start;
  let finish;
  for ( let i in str) {
      if (str[i] === '(') {
          start = i;
      }
      if (str[i] === ')') {
          finish = i;
      }
  }
  let str1 = str.substr(start, finish+1);
  return str.replace(str1, "");
};

const scoreScrabble = function (str) {
  // your code here - don't forget to return a number!
};
