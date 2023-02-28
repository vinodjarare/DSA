function hammingDistance(a, b) {
  if (a.length !== b.length) {
    return console.log("Strings must be of the same length");
  }

  let distance = 0;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      distance += 1;
    }
  }

  return distance;
}

const result = hammingDistance("karolin", "kathrin");

console.log(result);
