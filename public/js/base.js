const nome = "Marcelo Eltz"
let nome2 = ""
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
}

let nomes = ["Marcelo Eltz", "Maria Silva", "Pedro Silva"];

let pessoas = [
    {
        nome: "Marcelo Eltz",
        idade: "33",
        trabalho: "programador"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
];

function alterarNome() {
    nome2= "Maria Silva";
    console.log("Valor Alterado");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2= novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}




function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("-------IMPRMIR PESSOAS------")
    pessoas.forEach((iten) => {
        console.log("Nome:");
        console.log(iten.nome)


    console.log("Idade:");
    console.log(iten.idade);
    
    console.log("Trabalho:");
    console.log(iten.trabalho);
    })
}

imprimirPessoas();



console.log(pessoas)

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "porteiro"
});

imprimirPessoas();

console.log(pessoas)

//imprimirPessoa(pessoaDefault)

//imprimirPessoa( {
    //nome: "Maria Silva",
    //idade: "25",
    //trabalho: "UX/UI designer"
//});


//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//alterarNome();