
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
}function primo(n) {
	if (n == 0 || n == 1 || n == 4) return false;
	for (let x = 2; x < n / 2; x++) {
		if (n % x == 0) return false;
	}
	return true;
}


// 3   Utilizando la función que determina si un número es primo y la función que extrae
// los factores de un número, calcule la suma de todos los factores primos
// del número 600851475

function sumaFactoresPrimos(n) {
  // let arrFact = factores(n).filter(num=>primo(num) ===true);
  // return arrFact.reduce((acu,num)=>acu+num,0);
}

console.log(factores(600851475));

