let inputArea = prompt("Введите число для определения чётности:");
console.log (inputArea);
let numbervar = +inputArea ;
console.log (numbervar);
console.log (isNaN(numbervar));
if (typeof numbervar === "number") 
{
//если строго равно числу, то
  if (isNaN(numbervar)===false)
  {
  //если строго не равно Not-a-Number, то

    if (numbervar % 2 === 0)
    {
    //если без остатка делится на 2, то
    console.log ("Вы ввели чётное число.");
    } 
    else 
    { 
    //если с остатком делится на 2, то
    console.log ("Вы ввели нечётное число.");
    }
  }
  else 
  { 
  //если ввести NaN
    console.log ("Упс, кажется, вы ошиблись.");
  } 
  }
else 
{ 
//если ввести не число
   console.log ("Упс, кажется, вы ошиблись."); 
}
 

//Как же сложноооо, вроде простая задача а сидел над ней полтора часа :(

