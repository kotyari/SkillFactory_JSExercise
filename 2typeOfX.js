let x = "w";
let typeX = typeof (x);

switch (typeX) {
  case 'string':
    console.log ("x - строка");
    break;
  case 'number':
    console.log ("x - число");
    break;
  case 'boolean':
    console.log ("x - логического типа");
    break;
  default:
    console.log ("Тип x не определён");
}