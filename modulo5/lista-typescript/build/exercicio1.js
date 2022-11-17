const pessoa1 = (nome, dataNascimento) => {
    const [dia, mes, ano] = dataNascimento.split("/");
    const frase = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`;
    return frase;
};
console.log("ex.1", pessoa1("Luiz Rafhael", "02/05/1987"));
//# sourceMappingURL=exercicio1.js.map