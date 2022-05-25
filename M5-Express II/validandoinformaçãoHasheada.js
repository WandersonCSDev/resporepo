/* Exercício: Validando informação "hasheada"
A ideia de usar o hash é salvar informações confidenciais sem revelar seu conteúdo original. Mas o que acontece quando precisamos recuperar essas informações para, por exemplo, validar o login de um usuário?

Neste exemplo, já temos uma sequência de texto criptografada anteriormente, que armazenamos na constante hash1. Nosso objetivo é usar o método de comparação de hashes do bcrypt, onde passando o texto puro e o hash a ser comparado, sendo que o resultado do método deve ser guardado em uma constante chamada comparaHash.

Dentro do if, execute um console.log que diga 'os hashes são iguais'. */

const bcrypt = require("bcrypt");
const hash1 = bcrypt.hashSync("123456", 10);
const comparaHash = bcrypt.compareSync("123456", hash1);

if (comparaHash) {
  console.log("os hashes são iguais");
}
