function cadastrar(usuarios, ...novosusuarios){
    let totalusuarios = [
        ...usuarios,
        ...novosusuarios

    ];

    return console.log(totalusuarios);
}

let usuarios = ["Matheus", "João"];

let novosusuarios = cadastrar(usuarios, "Henrique", "Lucas");

