//concatenation without using inbuild methods

function concatenate(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  let str3 = new Array(len1 + len2 - 1);
  let i = 0;

  // Copy characters from str1 to str3
  while (i < len1) {
    str3[i] = str1[i];
    i++;
  }

  let j = 0;
  // Copy characters from str2 to str3
  while (i < len1 + len2) {
    str3[i] = str2[j];
    j++;
    i++;
  }

  // Convert str3 array to string
  str3 = str3.join("");
  return str3;
}

const string = concatenate("Hello", " World");
console.log(string);

//concatenation using inbuild (concat) method

const string1 = "Hay";
const string2 = "javascript";

const string4 = string1.concat(" ", string2);

console.log(string4);
