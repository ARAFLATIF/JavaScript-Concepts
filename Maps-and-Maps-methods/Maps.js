let map = new Map();
map.set('name', 'Jack');
map.set('age', '27');
map.forEach(myFunction);

function myFunction(value, key) {
    console.log(key + '-' + value);
}

OUTPUT : 

name-Jack
age-27
