//DOM - Document object model - modelo de objeto de documento, tranforma tudo na página em objetos. Cada objeto recebe atributos(propriedades) e metodos(funções)
// *Saber o tema atual e obter o elemento do tema atual
// *Saber onde esta o atributo de tema
// *se o botao for clicado, então trocar o tema...
//addeventlistener(evento, função)
document.querySelector('#btTrocaTema').addEventListener('click', () => {
    // pegar o elemento com o tema
    // se o tema for light, entao mude o atributo para dark
    //se não for, entao mude o atributo para light
    if (document.documentElement.getAttribute('data-tema') === 'light' ){
document.documentElement.setAttribute('data-tema', 'dark');
    } else {
        document.documentElement.setAttribute('data-tema', 'light');
    }
});
//arrow functions (parametros)=> corpo da funcao)
//get obtem set define o atributo (else=se não, se a condição for falsa)
    //bloco de decisão ,testar uma pergunta ou condição, se é verdadeira ou falsa, sim ou não
//se o atributo data-tema do html for igual a SVGFESpotLightElement, vai fazer alguma coisa

// procurar no documento o .=acessando um método ou um atributo de um objeto(função pertencente a um objeto, utilize o método queryselector do objeto document, queryselector significa consulta de seletor, addeventlistener é como se fosse a pessoa que vai ficar ouvindo, escutador de evento)
//Especificar o que ele tem que ouvir e o que fazer o q tem que ouvir, function delcara uma função, dar um nome p função. criando uma função e dizendo o que ele vai fazer


// funções
//function nomeDaFunção(parâmetros){dentro das chaves vai o corpo da função, o que ela vai fazer com os parametros e o que ela vai retornar para quem a chamou};
// *Trocar o tema. Para qual?:
// *1. pegar o elemento com o tema
// *2. apagar o atributo do tema atual
// *3. escrever o atributo do novo tema