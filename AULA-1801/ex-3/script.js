
let pessoas = [];

while (true) {
 
  let nome = prompt('Digite seu nome ');
  let idade = parseInt(prompt('Qual sua idade? '));
  let trabalhando = confirm('Está trabalhando?');

  let salario = 0;
  if (trabalhando) {
    salario = parseFloat(prompt('Informe o salário: '));
  }

  pessoas.push({ nome, idade, trabalhando, salario });

  let continuar = confirm('Deseja continuar cadastrando?');
  if (!continuar) {
    break;
  }
}

let desempregadas = pessoas.filter(pessoa => !pessoa.trabalhando);

let empregadasMenos2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario < 2500);

let empregadasMais2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario >= 2500);

console.log('Pessoas desempregadas:');
desempregadas.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`));

console.log('Pessoas empregadas com salários menores que 2500:');
empregadasMenos2500.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`));

console.log('Pessoas empregadas com salários maiores que 2500:');
empregadasMais2500.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`));
