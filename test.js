const logica = require("./index.js");

describe("Pruebas de Funciones para entrenar Lógica", () => {
  it("sumaFactores(15) es [1, 3, 4, 7, 6, 12, 8, 15, 13, 18, 12, 28, 14, 24, 24]", () => {
    expect(logica.sumaFactores(15).toString()).toBe(
      [1, 3, 4, 7, 6, 12, 8, 15, 13, 18, 12, 28, 14, 24, 24].toString()
    );
  });
  it("cantidadFactoresPares(15) es [0, 1, 0, 2, 0, 2, 0, 3, 0, 2, 0, 4, 0, 2, 0]", () => {
    expect(logica.cantidadFactoresPares(15).toString()).toBe(
      [0, 1, 0, 2, 0, 2, 0, 3, 0, 2, 0, 4, 0, 2, 0].toString()
    );
  });
  it("sumaFactoresPrimos(600851475) es 54514", () => {
    expect(logica.sumaFactoresPrimos(600851475)).toBe(54514);
  });
  it("mayorEntero([3, 12, 11, 56, 2, 78]) es 78", () => {
    expect(logica.mayorEntero([3, 12, 11, 56, 2, 78])).toBe(78);
  });
  it("menorEntero([3, 12, 11, 56, 2, 78]) es 2", () => {
    expect(logica.menorEntero([3, 12, 11, 56, 2, 78])).toBe(2);
  });
  it("sinDuplicados([2, 33, 44, 6, 17, 17, 89, 44]) es [2, 33, 44, 6, 17, 89]", () => {
    expect(
      logica.sinDuplicados([2, 33, 44, 6, 17, 17, 89, 44]).toString()
    ).toBe([2, 33, 44, 6, 17, 89].toString());
  });
  it("duplicados([2, 33, 44, 6, 17, 17, 89, 44]) es [17, 44]", () => {
    expect(logica.duplicados([2, 33, 44, 6, 17, 17, 89, 44]).toString()).toBe(
      [17, 44].toString()
    );
  });
  it("diferenciaCuadrados(20) es 41230", () => {
    expect(logica.diferenciaCuadrados(20)).toBe(41230);
  });
  it("diferenciasCuadrados(10) es [0, 4, 22, 70, 170, 350, 644, 1092, 1740, 2640]", () => {
    expect(logica.diferenciasCuadrados(10).toString()).toBe(
      [0, 4, 22, 70, 170, 350, 644, 1092, 1740, 2640].toString()
    );
  });
  it("sumaDiferenciasCuadrados(10) es 6732", () => {
    expect(logica.sumaDiferenciasCuadrados(10)).toBe(6732);
  });
  it("diferenciaCubos(20) es 9216900", () => {
    expect(logica.diferenciaCubos(20)).toBe(9216900);
  });
  it("diferenciasCubos(10) es [0, 18, 180, 900, 3150, 8820, 21168, 45360, 89100, 163350]", () => {
    expect(logica.diferenciasCubos(10).toString()).toBe(
      [0, 18, 180, 900, 3150, 8820, 21168, 45360, 89100, 163350].toString()
    );
  });
  it("sumaDiferenciasCubos(10) es 332046", () => {
    expect(logica.sumaDiferenciasCubos(10)).toBe(332046);
  });
  it("lugarPrimo(10) es 332046", () => {
    expect(logica.sumaDiferenciasCubos(10)).toBe(332046);
  });
  it("numeroTriangular(100) es 5050", () => {
    expect(logica.numeroTriangular(100)).toBe(5050);
  });
  it("numerosTriangulares(10) es [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]", () => {
    expect(logica.numerosTriangulares(10).toString()).toBe(
      [1, 3, 6, 10, 15, 21, 28, 36, 45, 55].toString()
    );
  });
  it("numerosTriangularesPares(10) es [ 6, 10, 28, 36 ]", () => {
    expect(logica.numerosTriangularesPares(10).toString()).toBe(
      [6, 10, 28, 36].toString()
    );
  });
  it("numerosTriangularesImpares(10) es [ 1, 3, 15, 21, 45, 55 ]", () => {
    expect(logica.numerosTriangularesImpares(10).toString()).toBe(
      [1, 3, 15, 21, 45, 55].toString()
    );
  });
  it("numerosTriangularesPrimos(10) es [ 3 ]", () => {
    expect(logica.numerosTriangularesPrimos(10).toString()).toBe(
      [3].toString()
    );
  });
  it("numerosTriangularesNoPrimos(10) es [ 1,  6, 10, 15, 21, 28, 36, 45, 55]", () => {
    expect(logica.numerosTriangularesNoPrimos(10).toString()).toBe(
      [1, 6, 10, 15, 21, 28, 36, 45, 55].toString()
    );
  });
  it("factoresTriangularesNP(4) es [[1], [1, 2, 3, 6], [1, 2, 5, 10]]", () => {
    expect(logica.factoresTriangularesNP(4).toString()).toBe(
      [[1], [1, 2, 3, 6], [1, 2, 5, 10]].toString()
    );
  });
  it("totalTriangularesNP(4) es [1, 144, 324]", () => {
    expect(logica.totalTriangularesNP(4).toString()).toBe(
      [1, 144, 324].toString()
    );
  });
  it("sumaTriangularesNP(4) es 469", () => {
    expect(logica.sumaTriangularesNP(4)).toBe(469);
  });
  it("extraeDigitos('12345') es [1, 2, 3, 4, 5]", () => {
    expect(logica.extraeDigitos("12345").toString()).toBe(
      [1, 2, 3, 4, 5].toString()
    );
  });
  it("sumaDigitos('32768') es 26", () => {
    expect(logica.sumaDigitos("32768")).toBe(26);
  });
  it("contadorLetras('aaabbcdf') es [{caracter:'a',cantidad:3},{caracter:'b',cantidad:2},{caracter:'c',cantidad:1},{caracter:'d',cantidad:1},{caracter:'f',cantidad:1}]", () => {
    expect(logica.contadorLetras("aaabbcdf").toString()).toBe(
      [
        { caracter: "a", cantidad: 3 },
        { caracter: "b", cantidad: 2 },
        { caracter: "c", cantidad: 1 },
        { caracter: "d", cantidad: 1 },
        { caracter: "f", cantidad: 1 },
      ].toString()
    );
  });
  it("contadorDigitos('12224433') es [{digito:'1',cantidad:1},{digito:'2',cantidad:3},{ digito:'4',cantidad:2},{digito:'3',cantidad:2}]", () => {
    expect(logica.contadorDigitos("12224433").toString()).toBe(
      [
        { digito: "1", cantidad: 1 },
        { digito: "2", cantidad: 3 },
        { digito: "4", cantidad: 2 },
        { digito: "3", cantidad: 2 },
      ].toString()
    );
  });
});
