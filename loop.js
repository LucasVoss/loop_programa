const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function main() {

    const rl = readline.createInterface({ input, output });

    //usuario diigta 5 numeros e o sistema exibe a media dos numeros digitados
   let soma = 0;

   for (let i = 0; i < 5; i++) {
    
    const numero = Number(await rl.question('Digite um número: '));
    
    soma = soma + numero;
}

    console.log(`A média dos números digitados é: ${soma / 5}`);
    rl.close();
}
main();