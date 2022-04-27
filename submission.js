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
  if (array.length === 1) {
    return array[0];
  }
  if (array.length === 2) {
    return array[0] * array[1];
  }
  if (array.length > 2) {

    let max = array[0] * array[1];

    for (let i=0; i<array.length-1; i++) {
      let product = array[i] * array[i+1];
      if (product >= max) {
        max = product;
      }
    }
    return max;
  }
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
  const scores = {
    'a':1, 'e':1, 'i':1, 'o':1, 'u':1, 'l':1, 'n':1, 'r':1, 's':1, 't':1,
    'd':2, 'g':2,
    'b':3, 'c':3, 'm':3, 'p':3,
    'f':4, 'h':4, 'v':4, 'w':4, 'y':4,
    'k':5,
    'j':8, 'x':8,
    'q':10, 'z':10
  };

  let sum = 0;
  str = str.toLowerCase();

  for (let i=0; i<str.length; i++) {
    sum += scores[str[i]];
  }
  return sum;

};
