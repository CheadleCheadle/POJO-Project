/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array of
objects as the first parameter and a string as the second. The `keyInObjectArray`
will return `true` if any of the objects contains the `keyString` as a key within them, and
`false` if not.


Examples:
let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];

keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false
keyInObjectArray(objArray, 'system'); // => true

***********************************************************************/

function keyInObjectArray(objArray, keyString) {
  let switched = false;
  objArray.forEach(objs => {

    for (let keys in objs) {

      console.log(`${keys}`);

      if (keyString == keys) {
        switched = true;

      }

    }

  }, 0);
  return switched;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
