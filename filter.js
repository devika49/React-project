const numbers = [0, 1, 2, 3, 4, 5];

const newArray = numbers.filter((i) => i < 3).map((val) => val + 5);
console.log(newArray);
