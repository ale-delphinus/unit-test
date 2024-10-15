function culcHealth(a, b) {
  let result = 0;
  if (a.health > b.health) {
    result = -1;
  } if (a.health < b.health) {
    result = 1;
  }
  return result;
}

export default function sortArray(arr) {
  arr.sort(culcHealth);
  return arr;
}
