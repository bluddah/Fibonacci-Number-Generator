// programa para gerar sequência fibonacci n vezes

// seção que coleta os dados do cliente
const number = parseInt(prompt('Quantas vezes deseja avançar a sequência?: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Serie Fibonacci:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
