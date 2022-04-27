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
  const counts = {};
  const result = {};
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

};

const removeParenth = function (str) {
  // your code here - don't forget to return a string!
  let start;
  let finish;
  for ( let i in str) {
      if (str[i] === '(') {
          start = parseInt(i);
      }
      if (str[i] === ')') {
          finish = parseInt(i);
      }
  }
  
  let omitStr = str.substring(start, finish+1);
  return str.replace(omitStr, "");
};



const scoreScrabble = function (str) {
  // your code here - don't forget to return a number!
};
