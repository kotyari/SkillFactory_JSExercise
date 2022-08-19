let myMap = new Map();
myMap.set('key1', 'prop1');
myMap.set('key2','prop2');
myMap.set('key3', 'prop3');

for (let name of myMap.entries()){
  console.log(name)
}
//Так я решил самостоятельно и с помощью курса.

for(let [key, value] of myMap) {
   console.log(`Ключ - ${key}. Значение - ${value}`);
}

//А так нагло подсмотрел в интернете на форуме, хотя половину синтаксиса не понял, но работает как надо.
