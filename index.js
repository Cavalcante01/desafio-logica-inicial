let nome = "cavalcante";
let experiencia = 0.20;

if (experiencia <= 1000) {
    nivel = "Ferro";
} if (experiencia <= 2000) {
    nivel = "Bronze";
} if (experiencia <= 5000) {
    nivel = "Prata";
} else {
    switch (herói) {
        case (experiencia <= 7000):
            nivel = "Ouro";
        case (experiencia <= 8000):
            nivel = "Platina";
        case (experiencia <= 9000):
            nivel = "Ascendente";
        case (experiencia <= 10000):
            nivel = "Imortal";
        case (experiencia <= 10.001):
            nivel = "Radiante";
            break;
    }
}

console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
