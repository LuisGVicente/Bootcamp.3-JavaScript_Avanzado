//
// NO MODIFICAR LOS NOMBRES NI LOS PARAMETROS
// DE LAS FUNCIONES O LOS TESTS DEJARAN DE FUNCIONAR
//

// HELPER FUNCTIONS

function factorial(n) {
  if (n <= 1) return 1;
  else return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
function primo(n) {
	if (n == 0 || n == 1 || n == 4) return false;
	for (let x = 2; x < n / 2; x++) {
		if (n % x == 0) return false;
	}
	return true;
}

function primos(n) {
  arrp = [];
  let cont = 2;
  let cont2 = 0;
  let p = 0;
  while(cont <=n) {
      while(cont2 < cont) {
          if(cont % cont2 == 0 && cont2 !=1 &&cont2 !=cont) {
              p=true;
          }
          cont2++;
      }
      if (p==false) {
          arrp.push(cont2);
      }
      else {
          p=false;
      }
      cont++;
      cont2=0;
  }
  return arrp;
}
function factores(n) {
  let arr = [n];
  let arrdiv = Array.from({length: n/2}, (_, i) => i + 1);
  for (let num of arrdiv) {
      if (n%num == 0) {
          arr.push(num);
      }
  } return arr;
}

// 1   Utilizando la función factores(N) que devuelve en un arreglo los factores de un número,
// escriba una función que devuelva otro arreglo con la suma de todos los factores
// de todos los números entre 1 y 15 (ambos incluidos)
// Utilice los métodos map() y reduce() si fuera posible

function sumaFactores(n) {
  let arrFact = [];
  for (let i = 1; i <= n; i++) {
      let v = factores(i).reduce((acu,total)=>acu+total,0);
      arrFact.push(v);
  }
return arrFact;
}


// 2   Utilizando la función factores(N) que devuelve en un arreglo los factores de un número,
// escriba una función que devuelva otro arreglo con la cantidad de factores pares
// de todos los números entre 1 y 15 (ambos incluidos)
// Utilice los métodos map() y filter() si fuera posible

function cantidadFactoresPares(n) {
  let arrFact = [];
  for (let i = 1; i <= n; i++) {
      let v = factores(i).filter(num=>num%2 ===0);
      arrFact.push(v.length);
  }
return arrFact;
}

// 3   Utilizando la función que determina si un número es primo y la función que extrae
// los factores de un número, calcule la suma de todos los factores primos
// del número 600851475

function sumaFactoresPrimos(n) {
  // let arrFact = factores(n).filter(num=>primo(num) ===true);
  // return arrFact.reduce((acu,num)=>acu+num,0);
}

//4   Dado un arreglo de enteros, escriba una función mayorEntero() que encuentre el mayor entero en el arreglo
// Por ejemplo, en [3,12,11,56,2,78] debería devolver 78

function mayorEntero(arr) {
  let arrInt = arr.filter(num => Number.isInteger(num));
  arrInt.sort((a, b) => b- a);
  return arrInt[0];
}

// 5  Dado un arreglo de enteros, escriba una función menorEntero() que encuentre
// el menor entero en el arreglo
// Por ejemplo, en [3,12,11,56,2,78] debería devolver 2

function menorEntero(arr) {
  let arrInt = arr.filter(num => Number.isInteger(num));
  arrInt.sort((a, b) => a - b);
  return arrInt[0];
}

//6   Dado un arreglo de enteros, escriba una función sinDuplicados() que devuelva
// el arreglo pero sin números duplicados
// Por ejemplo, si el arreglo es [2,33,44,6,17,17,89,44] debería devolver [2,33,44,6,17,89]

function sinDuplicados(arr) {
  const sinD = arr.filter((num,index) => arr.indexOf(num) === index);
  return sinD;
}

//7   Dado un arreglo de enteros, escriba una función duplicados() que devuelva
// un arreglo de los números que están duplicados en el arreglo
// Por ejemplo, si el arreglo es [2,33,44,6,17,17,89,44] debería devolver [17,44]

function duplicados(arr) {
  const dup = arr.filter((num,index) => arr.indexOf(num) !== index);
  return dup;
}

//8   La suma de cuadrados de los 10 primeros números naturales es:
//    1**2 + 2**2 + 3**2 ... + 10**2 = 385
// El cuadrado de la suma de los 10 primeros números naturales es:
//    (1 + 2 + 3 + ... + 10)**2 = 55**2 = 3025
// La diferencia entre la suma de cuadrados y el cuadrado de la suma es:
//     3025 - 385 = 2640
// Escriba la función diferenciaCuadrados(N) que calcule esta cantidad
// para los 20 primeros números naturales

function diferenciaCuadrados(n) {
  let arrn = [];
  for (let i=0; i<= n; i++){ arrn.push(i);};
  let sumaCuadrados = arrn.reduce((acu,num) => acu + num**2,0);
  let suma = arrn.reduce((acu,num) => acu + num,0);
  return suma**2 - sumaCuadrados;
}

//9   Utilizando la función diferenciaCuadrados(N) del ejercicio anterior,
// calcule las diferencias de cuadrados de los 10 primeros números naturales
// y guárdelas en un arreglo

function diferenciasCuadrados(n) {
  let arrn = [];
  for (let i=1; i<= n; i++){ arrn.push(i);};
  let i = 1;
  let difCuad = arrn.map(function(num){
      return diferenciaCuadrados(num);
  })
  return difCuad;
}

//--Primer resultado de la--  function diferenciasCuadrados(n) {
//   arrn = [];
//   for (let i=1; i<= n; i++){ arrn.push(i);};
//   let i = 1;
//   let difCuad = arrn.map(function(num){
//       return num**2 - i**2;
//       i++;
//   })
//   return difCuad;
// }

//10   Utilizando la función diferenciasCuadrados(N) del ejercicio anterior,
// calcule la suma de las diferencias de cuadrados de los 10 primeros números naturales

function sumaDiferenciasCuadrados(n) {
  let difCuad = diferenciasCuadrados(n);
  return difCuad.reduce((acu,num) => acu + num, 0);
}

//11  La suma de cubos de los 10 primeros números naturales es:
//    1**3 + 2**3 + 3**3 ... + 10**3 = 3025
// El cubo de la suma de los 10 primeros números naturales es:
//    (1 + 2 + 3 + ... + 10)**3 = 55**3 = 166375
// La diferencia entre la suma de cuadrados y el cuadrado de la suma es:
//     166375 - 3025 = 163350
// Escriba la función diferenciaCubos(n) que calcule esta cantidad
// para los 20 primeros números naturales

function diferenciaCubos(n) {
  let arrn = [];
  for (let i=0; i<= n; i++){ arrn.push(i);};
  let sumaCubos = arrn.reduce((acu,num) => acu + num**3,0);
  let suma = arrn.reduce((acu,num) => acu + num,0);
  return suma**3 - sumaCubos;
}

//12   Utilizando la función diferenciaCubos(N) del ejercicio anterior,
// calcule las diferencias de cubos de los 10 primeros números naturales
// y guárdelas en un arreglo

function diferenciasCubos(n) {
  let arrn = [];
  for (let i=1; i<= n; i++){ arrn.push(i);};
  let difCub = arrn.map(function(num){
      return diferenciaCubos(num);
  })
  return difCub;
}

//13   Utilizando la función diferenciasCubos(N) del ejercicio anterior,
// calcule la suma de las diferencias de cubos de los 10 primeros números naturales

function sumaDiferenciasCubos(n) {
  let difCub = diferenciasCubos(n);
  return difCub.reduce((acu,num) => acu + num, 0);
}

//14   En la lista de los números primos: 2, 3, 5, 7, 11 y 13, podemos ver que 13 es el sexto
// Escriba una función lugarPrimo(p) que dado un lugar p diga que número primo ocupa esta
// posición
// Por ejemplo: lugarPrimo(6) debería devolver 13 y lugarPrimo(3) debería devolver 5

function lugarPrimo(p) {
  let primo = primos(50);
  return primo.slice(p-1,p);
}

//15   Un número triangular es la suma de todos los números entre 1 y el número (ambos incluidos)
// Por ejemplo: el valor triangular de 7 sería 1+2+3+4+5+6+7 = 28
// Escriba una función numeroTriangular(N) que devuelva el valor triangular de 100

function numeroTriangular(n) {
  let arrt = [];
  for (let i=1; i<= n; i++){ arrt.push(i);}; 
  return arrt.reduce((acu,num) => acu + num, 0);
}

//16   Utilizando la función numeroTriangular(N), escriba la función numerosTriangulares(N)
// que devuelva un arreglo con los valores triangulares para todos los números entre 1 y 10

function numerosTriangulares(n) {
  let arrt = [];
  for (let i=1; i<= n; i++){ arrt.push(i);}; 
  let nums = arrt.map(function(num){
  return numeroTriangular(num);
  })
  return nums
}

//17   Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares pares y guárdelos en un arreglo
// Utilice si es posible el método filter()
// Haga la prueba con el valor 10

function numerosTriangularesPares(n) {
  let par = numerosTriangulares(n).filter(valor => valor % 2 == 0);
  return par;  
}

// 18  Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares impares y guárdelos en un arreglo
// Utilice si es posible el método filter()
// Haga la prueba con el valor 10

function numerosTriangularesImpares(n) {
  let impar = numerosTriangulares(n).filter(valor => valor % 2 !== 0);
  return impar; 
}

//19   Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares primos y guárdelos en un arreglo
// Utilice si es posible el método filter()
// Haga la prueba con el valor 100

function numerosTriangularesPrimos(n) {
  let nump = numerosTriangulares(n).filter(valor => primo(valor) == true);
  return nump; 
}

//20   Utilizando la función numerosTriangulares(n), seleccione
// todos los valores triangulares no primos y guárdelos en un arreglo
// Utilice si es posible el método filter()

function numerosTriangularesNoPrimos(n) {
  let noprimo = numerosTriangulares(n).filter(valor => primo(valor) === false);
  return noprimo; 
}

//21   Utilizando la función numerosTriangularesNoPrimos(N),
// calcule los factores de cada uno de los valores triangulares y guárdelos en un arreglo
// Llame a la función factoresTriangularesNP(N)
// Utilice si es posible el método map()

function factoresTriangularesNP(n) {
  let fact = numerosTriangularesNoPrimos(n).map(num=> factores(num).sort((a,b)=>a-b));
  return fact;
}
console.log(factoresTriangularesNP(4));

//22  Utilizando la función factoresTriangularesNP(N), calcule el cuadrado
// de la suma de los factores triangulares y guárdelos en un arreglo
// Llame a la función totalTriangularesNP(N)
// Utilice si es posible los métodos map() y reduce()

function totalTriangularesNP(n) {
  let factnp = factoresTriangularesNP(n).map(item => item.reduce((acu, num) => acu + num),0);
  let factnp2 = factnp.map(num=>num**2);
  return factnp2;
}

//23   Utilizando la función totalTriangularesNP(N), calcule la suma de todos
// los valores del arreglo
// Utilice si es posible el método reduce()

function sumaTriangularesNP(n) {
  let sumaTriNP = totalTriangularesNP(n).reduce((acu, num) => acu + num, 0);
  return sumaTriNP;
}

//24   Escriba una función extraeDigitos(s), donde s es una cadena de caracteres compuesta
// por dígitos y que devuelva un arreglo de números enteros a partir de ellos
// Por ejemplo extraeDigitos(“12345”) debe devolver [1,2,3,4,5]
// El método split() de una cadena pasándole como argumento una cadena vacía,
// devuelve los caracteres de la cadena en forma de arreglo. “abc”.split(“”)
// devuelve [“a”,”b”,”c”]
// Si es posible utilice el método map() y la función parseInt() para convertir
// cada dígito en un número entero

function extraeDigitos(s) {
  let digi = s.split("").map(c => parseInt(c,10))
  return digi;
}

//25   Usando la función extraeDigitos(s) del ejercicio anterior,
// cree la función sumaDigitos(s) que devuelva la suma de los dígitos
// de un número representado como cadena de caracteres
// Por ejemplo sumaDigitos(“32768”) es 3+2+7+6+8 = 26
// Utilice si es posible el método reduce()

function sumaDigitos(s) {
  let sumaD = extraeDigitos(s).reduce((acu, c) => acu + c,0);
  return sumaD;
}

//26   Cree una función contadorLetras(s) que dado un cadena de caracteres s
// devuelva un arreglo de objetos con dos propiedades: caracter y cantidad
// Por ejemplo: contadorLetras(“aaabbcdf”) deberá devolver:
//  [{caracter:”a”, cantidad:3},
//   {caracter:”b”, cantidad:2},
//   {caracter:”c”,cantidad:1},
//   { caracter:”d”,cantidad:1} ,
//   { caracter:”f”,cantidad:1}]
// Utilice el método split(“”) para convertir una cadena en un arreglo de caracteres

function contadorLetras(s) {
  let spl = s.split('');
  let mapa = spl.map((val,index,arr) => {return {caracter: val, cantidad: arr.filter(ele => ele === val).length}});
  let filtro = mapa.filter((val,index,arr)=>arr.map(val=>val.caracter).indexOf(val.caracter) === index);
  return filtro;
}

//27   Cree una función contadorDigitos(s) que dado un cadena de caracteres s devuelva
// un arreglo de objetos con dos propiedades: digito y cantidad
// Por ejemplo: contadorDigitos(“12224433”) deberá devolver
// [{digito:”1”, cantidad:1},
//  {digito:”2”, cantidad:3},
//  {digito:”4”,cantidad:2},
//  {digito:”3”,cantidad:2}]
// Utilice el método split(“”) para convertir una cadena en un arreglo de caracteres

function contadorDigitos(s) {
  let spl = s.split('');
  let mapa = spl.map((val,index,arr) => {return {digito: val, cantidad: arr.filter(ele => ele === val).length}});
  let filtro = mapa.filter((val,index,arr)=>arr.map(val=>val.digito).indexOf(val.digito) === index);
  return filtro;
}

export {
  sumaFactores,
  cantidadFactoresPares,
  sumaFactoresPrimos,
  mayorEntero,
  menorEntero,
  sinDuplicados,
  duplicados,
  diferenciaCuadrados,
  diferenciasCuadrados,
  sumaDiferenciasCuadrados,
  diferenciaCubos,
  diferenciasCubos,
  sumaDiferenciasCubos,
  lugarPrimo,
  numeroTriangular,
  numerosTriangulares,
  numerosTriangularesPares,
  numerosTriangularesImpares,
  numerosTriangularesPrimos,
  numerosTriangularesNoPrimos,
  factoresTriangularesNP,
  totalTriangularesNP,
  sumaTriangularesNP,
  extraeDigitos,
  sumaDigitos,
  contadorLetras,
  contadorDigitos,
};
