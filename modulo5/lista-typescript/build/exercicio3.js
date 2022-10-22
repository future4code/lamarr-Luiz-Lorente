var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
const funcao3 = (nome, ano, genero, nota) => {
    if (nota) {
        return {
            nome: nome,
            anoLancamento: ano,
            genero: genero,
            pontuacao: nota
        };
    }
    else {
        return {
            nome: nome,
            anoLancamento: ano,
            genero: genero
        };
    }
};
console.log("ex.3", funcao3("Duna", 2021, GENERO.ACAO, 74));
//# sourceMappingURL=exercicio3.js.map