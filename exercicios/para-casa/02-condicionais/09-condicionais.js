/* Crie um programa que receba duas notas de um aluno, calcule a média e mostre se ele foi aprovado!

Se a nota for maior ou igual a 6, printar "Aprovado"
Se a nota for maior ou igual a 5, printar "Recuperação"
Se for menor que a nota de recuperação, printar "Reprovado"
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('\nVamos ver se vc passou! Qual a primeira nota?\n', nota1 => {
  readline.question('\nQual a segunda nota?\n', nota2 => {

    console.log(nota1, nota2);

    const grade1 = Number (nota1)
    const grade2 = Number (nota2) 
    const avg = ((grade1 + grade2) / 2)
    
    if (avg >= 6){
      console.log ('Aprovada')

    }
    else if (avg >= 5 ){
      console.log ('Recuperação')
    }
    else {
      console.log ('Reprovada')
    }


    readline.close();
  });
});

readline.on('close', () => {
  console.log('\nEstude muito sempre!');
  process.exit(0);
});
