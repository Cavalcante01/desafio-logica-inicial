let nome = "cavalcante";
let experiencia = 0.20;

if (experiencia <= 1.000) {
    nivel = "Ferro";
} if (experiencia <= 2.000) {
    nivel = "Bronze";
} if (experiencia <= 5.000) {
    nivel = "Prata";
} else {
    switch (herói) {
        case (experiencia <= 7.000):
            nivel = "Ouro";
        case (experiencia <= 8.000):
            nivel = "Platina";
        case (experiencia <= 9.000):
            nivel = "Ascendente";
        case (experiencia <= 10.000):
            nivel = "Imortal";
        case (experiencia <= 10.001):
            nivel = "Radiante";
            break;
    }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
