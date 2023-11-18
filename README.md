# JavaScript Car Class

This JavaScript project defines a `car` class with properties such as `marca`, `cor`, and `kmLitro`. It also includes a method to calculate the cost of a trip based on the distance, fuel price, and the car's fuel efficiency.

## Installation

To use this project, clone the repository to your local machine and run the JavaScript file in a JavaScript environment.

## Usage

To use this project, create an instance of the `car` class and call the `calcularViagem` method with the distance and fuel price as parameters.

```javascript
const hb20 = new car("Hyundai", "Branco", 1 / 12);
console.log(hb20.calcularViagem(70, 5.69));
```

## How it works

The provided JavaScript code defines a class named `car` and then creates two instances of this class. Let's break it down:

1. Class Definition:

```javascript
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
```

The `car` class has three properties: `marca`, `cor`, and `kmLitro`. The `constructor` function is a special method for creating and initializing an object created within a class. It takes three parameters: `marca`, `cor`, and `kmLitro` and assigns them to the properties of the class

The `calcularViagem` method calculates the cost of a trip based on the distance, fuel price, and the car's fuel efficiency (km per liter). It does this by multiplying the distance by the car's fuel efficiency and then multiplying the result by the fuel price

2. Creating Instances of the Class:

```javascript
const hb20 = new car("Hyundai", "Branco", 1 / 12);
console.log(hb20.calcularViagem(70, 5.69));

const masterRide = new car("Haoujue", "Preto", 1 / 46);
console.log(masterRide.calcularViagem(123, 5.69));
```

The `new` keyword is used to create an instance of the class. In this case, two instances of the `car` class are created: `hb20` and `masterRide`. Each instance is initialized with specific values for the `marca`, `cor`, and `kmLitro` properties

The `calcularViagem` method is then called on each instance, passing in a distance and a fuel price. The result of this calculation is logged to the console

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

## Thanks

This project was made possible thanks to the support and guidance of DIO

## References

This project was inspired by a DIO challenge
