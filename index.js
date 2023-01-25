function trocaVogais (texto) {

  let word = texto; // essa variavel eu poderia colocar dentro do FOR, permitindo que eu retire os [i] de dentro da condicional do IF, conforme mostrado abaixo dentro do FOR
  let changed = ""; // string vazia para o programa ir adicionando os caracteres
  
  for (let i = 0; i < word.length; i++) {
    // letter = texto[i] eh uma opcao aqui, dai eu retiraria o let word = texto do inicio do codigo e dentro da condicional do IF eu trocaria os word[i] pela variavel letter.
    if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
      changed = changed + 1;
    } else {
      changed = changed + word[i];
    }
  }
  return changed;
}

//A minha primeira versao desse codigo de trocar vogais, eu fiz da seguinte forma: 

//function trocaVogais (texto) {

//  let arr = []; %%%%%%% criei uma array vazia que nao era necessaria %%%%%%
//  let word = texto; 
//  let changed = "";
  
//  for (let i = 0; i < word.length; i++) {
//    if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
//      arr.push(1);
//    } else {
//      arr.push(word[i]);
//    }
//  }
//  return arr;
//}

// Nessa primeira versao, o retorno do codigo era uma array tambem. Ex: caso eu inserisse a string "uva", o programa me retornava [1,v,1], ou se caso eu inserisse a string "carro", o programa me retornava [c,1,r,r,1]. Nao esta errado, porem eu queria que ele retornasse uma string mesmo. Entao bastava que eu criasse apenas uma string varia e fosse incrementando conforme as iteracoes utilizando o ++.