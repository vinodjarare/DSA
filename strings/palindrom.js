function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

const result = isPalindrome("racecar");

console.log(result);

//or

function palidrom(string) {
  const rev = string.split("").reverse().join("");
  if (string === rev) {
    return true;
  } else {
    return false;
  }
}

const string = palidrom("racecar");
console.log(string);
