// SOME EVERY

let nomes = [
    { nome: "Matheus", idade: 18 },
    { nome: "Maria", idade: 25 },
    { nome: "Henrique", idade: 20 }
];

// console.log(nomes.some(nomes => nomes === "Maria"));

console.log(nomes.every(nome => nome.idade >= 18));

if(nomes.every(nome => nome.idade >= 28)) {
    console.log("TODOS SÃO MAIORES DE 18")
}else{
    console.log("OPS ALGUEM É DE MENOR");
}

