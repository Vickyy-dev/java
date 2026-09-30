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

function imparPar() {
    let num = Number(prompt("Digite um numero:"));
    (num % 2 === 0) ? alert("Este numero é par!") : alert("Esse numero é impar");
}

function valoresIguais() {
    let a = Number(prompt("Digite o valor de A:"));
    let b = Number(prompt("Digite o valor de B:"));

    if (a === b) {
        let c = a + b;
        alert("A soma de A + B é: " + c); 
    } else {
        let c = a * b;
        alert("O produto de A * B é: " + c);
    }
} 

function valorPositivoNegativo() {
    let number = Number(prompt("Digite um numero positivo ou negativo:"));
    
    if (number > 0) {
        let dobro = number * 2;
        alert("O dobro é: " + dobro);
    } else {
        let resultado = number * 3;
        alert("O triplo é: " + resultado);
    }
}

function veri