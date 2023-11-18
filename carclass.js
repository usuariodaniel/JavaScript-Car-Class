class car {
  marca;
  cor;
  kmLitro;

  constructor(marca, cor, kmLitro) {
    this.marca = marca;
    this.cor = cor;
    this.kmLitro = kmLitro;
  }

  calcularViagem(distanciaKm, precoCombustivel) {
    return distanciaKm * this.kmLitro * precoCombustivel;
  }
}

const hb20 = new car("Hyundai", "Branco", 1 / 12);
console.log(hb20.calcularViagem(70, 5.69));

const masterRide = new car("Haoujue", "Preto", 1 / 46);
console.log(masterRide.calcularViagem(123, 5.69));
