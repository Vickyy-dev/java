function somaMaior() {
    let A = Number(prompt("Digite o valor de A:"));
    let B = Number(prompt("Digite o valor de B:"));
    let C = Number(prompt("Digite o valor de C:"));
    let soma = A + B;

    if (soma < C) {
        alert(`
          =====================
          A soma de A e B é: ${soma}
          =====================
          A: ${A}
          B: ${B}
          C: ${C}
          =====================
          `);
        } else {
        alert(`
          =====================
          "Qqq issoooo?"
          =====================
          `);
        }
    }

function tempoCasamento() {
    let nome = String(prompt("Digite seu nome:"));
    let sexo = String(prompt("Qual seu genero? 'M' para masculino ou 'F' para feminino ou 'N' para neutro")).toUpperCase();
    let estadocivil = String(prompt("Qual seu estado civil?\n Solteiro(a) ou Casado(a)?")).toUpperCase();

    // Aceita tanto "F" quanto "FEMININO" para evitar travar se digitar a palavra toda
    if ((sexo == "F" || sexo == "FEMININO") && estadocivil == "CASADA") {
        let tempo = Number(prompt("Digite quantos anos de casada:"));
        alert(`
            =================
            Nome: ${nome}
            Tempo de casada: ${tempo} Anos
            =================
        `);
    } else {
        alert(`
            =================
            Qqq Isso?
            =================
        `);
    }
}
