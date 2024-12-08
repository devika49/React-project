//let originalstring = "hello world";
//let upperstring = originalstring.toUpperCase();

//console.log(upperstring);

const str = "hi i am devika";
const array = str.split(" ");

console.log(array);

const newArray = array.map((val) => {
  return val[0].toUpperCase() + val.slice(1);
});

console.log(newArray);
