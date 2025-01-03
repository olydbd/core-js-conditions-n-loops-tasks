/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b) {
    if (a > c) return a;
    return c;
  }
  if (b > c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(king.x - queen.x) === Math.abs(king.y - queen.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (a === b || b === c || a === c) && a + b > c && a + c > b && c + b > a;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let res = '';
  let numCopy = num;
  while (numCopy > 0) {
    if (numCopy >= 30) {
      res += 'XXX';
      numCopy -= 30;
    } else if (numCopy >= 20) {
      res += 'XX';
      numCopy -= 20;
    } else if (numCopy >= 10) {
      res += 'X';
      numCopy -= 10;
    } else if (numCopy === 4 || numCopy === 9) {
      res += 'I';
      numCopy += 1;
    } else if (numCopy >= 5) {
      res += 'V';
      numCopy -= 5;
    } else {
      res += 'I';
      numCopy -= 1;
    }
  }
  return res;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const obj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  let res = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '.':
      case ',':
        res += 'point ';
        break;
      case '-':
        res += 'minus ';
        break;
      default:
        res += obj[numberStr[i]];
        if (i !== numberStr.length - 1) res += ' ';
    }
  }
  return res;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let flag = true;
  for (let i = 0; i < Math.ceil(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      flag = false;
      break;
    }
  }
  return flag;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let res = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      res = i;
      break;
    }
  }
  return res;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numStr = `${num}`;
  let flag = false;
  for (let i = 0; i < numStr.length; i += 1) {
    if (+numStr[i] === digit) {
      flag = true;
      break;
    }
  }
  return flag;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let sumLeft;
  let sumRight;
  let res = -1;
  for (let i = 1; i < arr.length - 1; i += 1) {
    sumLeft = 0;
    sumRight = 0;
    for (let j = i - 1; j >= 0; j -= 1) {
      sumLeft += arr[j];
    }
    for (let j = i + 1; j < arr.length; j += 1) {
      sumRight += arr[j];
    }
    if (sumLeft === sumRight) res = i;
  }
  return res;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const mtx = [];
  for (let i = 0; i < size; i += 1) mtx[i] = [];

  let direction = 'right';
  let row = 0;
  let col = -1;
  let elem = 1;
  let sum = size * size;
  while (sum > 0) {
    if (direction === 'right') {
      col += 1;
      mtx[row][col] = elem;
      elem += 1;
      sum -= 1;
      if (row + col === size - 1) {
        direction = 'down';
      }
    } else if (direction === 'down') {
      row += 1;
      mtx[row][col] = elem;
      elem += 1;
      sum -= 1;
      if (row - col === 0) {
        direction = 'left';
      }
    } else if (direction === 'left') {
      col -= 1;
      mtx[row][col] = elem;
      elem += 1;
      sum -= 1;
      if (row + col === size - 1) {
        direction = 'up';
      }
    } else {
      row -= 1;
      mtx[row][col] = elem;
      elem += 1;
      sum -= 1;
      if (row - col === 1) {
        direction = 'right';
      }
    }
  }
  return mtx;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const mtx = matrix;
  for (let i = 0; i < mtx.length; i += 1) {
    for (let j = i; j < mtx[i].length; j += 1) {
      const temp = mtx[i][j];
      mtx[i][j] = mtx[j][i];
      mtx[j][i] = temp;
    }
  }
  for (let i = 0; i < mtx.length; i += 1) {
    for (let j = 0; j < mtx[i].length / 2 - 1; j += 1) {
      const temp = mtx[i][j];
      mtx[i][j] = mtx[i][mtx.length - j - 1];
      mtx[i][mtx.length - j - 1] = temp;
    }
  }
  return mtx;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortArr = arr;

  for (let i = 1; i < sortArr.length; i += 1) {
    const key = sortArr[i];
    let j = i - 1;
    while (j >= 0 && sortArr[j] > key) {
      sortArr[j + 1] = sortArr[j];
      j -= 1;
    }
    sortArr[j + 1] = key;
  }

  return sortArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let left = '';
  let right = '';
  let strCopy = str;
  for (let n = 1; n <= iterations; n += 1) {
    for (let i = 0; i < strCopy.length; i += 1) {
      if (i % 2 === 0) {
        left += strCopy[i];
      } else {
        right += strCopy[i];
      }
    }
    strCopy = left + right;
    left = '';
    right = '';
    if (strCopy === str) return shuffleChar(str, iterations % n);
  }
  return strCopy;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const str = `${number}`;
  const arr = [...str];

  let indNum = 0;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    if (arr[i - 1] < arr[i]) {
      indNum = i;
      break;
    }
  }
  if (indNum === 0) return number;

  let indMin = indNum;
  for (let i = indNum; i < arr.length - 1; i += 1) {
    if (arr[i + 1] < arr[i] && arr[i + 1] > arr[indNum - 1]) {
      indMin = i + 1;
    }
  }

  const temp = arr[indNum - 1];
  arr[indNum - 1] = arr[indMin];
  arr[indMin] = temp;

  const endArr = [];
  for (let i = indNum; i < arr.length; i += 1) {
    endArr.push(arr[i]);
  }

  endArr.sort();

  let res = '';
  for (let i = 0; i < indNum; i += 1) {
    res += arr[i];
  }
  for (let i = 0; i < endArr.length; i += 1) {
    res += endArr[i];
  }

  return +res;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
