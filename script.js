function Pet(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;

    this.falar = function () {
        return "Oi, eu sou " + this.nome + " e sou um " + this.especie;
    };

    this.idadeHumana = function () {
        if (this.especie.toLowerCase() === "cachorro") {
            return this.idade * 7;
        } else if (this.especie.toLowerCase() === "gato") {
            return this.idade * 6;
        } else {
            return this.idade * 5;
        }
    };
}

//array
const meusPets = [
    new Pet("Rex", "Cachorro", 5),
    new Pet("Miau", "Gato", 3),
    new Pet("Neve", "Hamster", 2)
];


const buscarPetPeloNome = function (nome) {
    const petEncontrado = meusPets.find(pet => pet.nome.toLowerCase() === nome.toLowerCase());
    return petEncontrado ? petEncontrado : "Pet não encontrado";
};


const listarPets = () => {
    meusPets.forEach(pet => {
        console.log(`Nome: ${pet.nome}, Espécie: ${pet.especie}, Idade: ${pet.idade} anos`);
    });
};

//funçao de ordem superior
function executarAcaoNosPets(acao) {
    meusPets.forEach(acao);
}

//daqui pra cima funções

//daqui para frente terminar

console.log("Falas dos pets ");
executarAcaoNosPets(pet => console.log(pet.falar()));

console.log("\nIdade humana dos pets");
executarAcaoNosPets(pet =>
    console.log(`Idade humana de ${pet.nome}: ${pet.idadeHumana()} anos`)
);

console.log("\nBuscando pet");
const resultadoBusca = buscarPetPeloNome("Miau");
if (typeof resultadoBusca === "string") {
    console.log(resultadoBusca);
} else {
    console.log(`Pet encontrado: ${resultadoBusca.nome}, espécie: ${resultadoBusca.especie}, idade: ${resultadoBusca.idade} anos`);
}

console.log("\nListando pets");
listarPets();
