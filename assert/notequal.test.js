import { notEqual } from "https://deno.land/std@0.185.0/testing/asserts.ts";

function multiplicar(a, b) {
  return a * b;
}

const resultado = multiplicar(6, 1);
notEqual(resultado, 7, "A multiplicação de 6 e 1 não deve ser igual a 7");
