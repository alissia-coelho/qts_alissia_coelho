import { verificarNumeroPar } from "./verificarNumeroPar.ts";
import { assert } from "https://deno.land/std@0.177.0/testing/asserts.ts";

Deno.test('deve retornar true para números pares', () => {
  assert.ok(verificarNumeroPar(2)); 
  assert.ok(!verificarNumeroPar(5)); 
});
