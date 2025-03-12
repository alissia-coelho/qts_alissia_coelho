import { strictEqual } from "https://deno.land/std@0.185.0/testing/asserts.ts";
function soma(a, b) {
  return a + b;
}
const resultado = soma(1, 2);
strictEqual(resultado, 4, "A soma de 1 e 2 deve ser 4");
