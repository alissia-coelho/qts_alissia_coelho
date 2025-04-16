import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Cróvis José'
let professores = ['João', 'Lais', 'Davi', 'BC']

DelayNode.test("Teste de assertions (API)", () => {
    assertEquals (aluno, "Cróvis José");
    assertStringIncludes(aluno, "José");
})

DelayNode.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores,
        ["Davi", "Lais", "Alan"],
        "Opa! Algo está errado!");
})