// crear 30 objetos de carros con parametros de marca, modelo y annio de manera automatica (con bucles)
function carro (marca, modelo, year){
    this.marca = marca,
    this.modelo = modelo,
    this.year = year
}

let marca =[]
marca.push(
    "Toyota",    
    "Ford",    
    "Chevrolet",    
    "Honda",    
    "Nissan",    
    "Volkswagen",    
    "BMW",    
    "Mercedes-Benz",    
    "Audi",    
    "Hyundai",   
    "Kia",    
    "Subaru",    
    "Mazda",   
    "Lexus",   
    "Jeep",   
    "Volvo",   
    "Land Rover",   
    "Ferrari",    
    "Porsche",    
    "Tesla"
    )

let year = []
for(let i =1; i<=20;i++){
    year.push(2001+i)
}

let modelo = [
    "Hilux",
    "Civic",
    "Corolla",
    "Mustang",
    "Camry",
    "Wrangler",
    "Accord",
    "Golf",
    "Sentra",
    "Fusion",
    "Outback",
    "Cruze",
    "Jetta",
    "Focus",
    "Malibu",
    "Sonata",
    "Prius",
    "Rav4",
    "Impreza",
    "Escape"
]
let autos =[]
for (let i =0; i<20; i++){
    let auto = new carro(marca[i], modelo[i], year[i])
    autos.push(auto)  
}

/*
En este desafío vas a recibir un objeto car como parámetro de la función solution.
Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original con la propiedad drivingLicense como false.
*/

function coche (brand, model, licensePlate){
    this.brand = brand,
    this.model = model,
    this.licensePlate = licensePlate
}


const  car = {
    brand:"Fuego", 
    model:"boton-fuego", 
    licensePlate: "GTR443"
}
const car1 = {
    brand:"aire", 
    model:"boton-juhlo" 
}

function solution(car){
    if (car.licensePlate == null){
        Object.getOwnPropertyNames(car).forEach((prop) => {
            console.log(`${prop}: ${car[prop]},`);
          });
          console.log("drivingLicense: " + Boolean (car.licensePlate))
    }
    else {
        Object.getOwnPropertyNames(car).forEach((prop) => {
            console.log(`${prop}: ${car[prop]},`);
          });
          console.log("drivingLicense: " + Boolean (car.licensePlate))
    }
}

solution({
    color: 'red',
    brand: 'Kia',
  });

solution({
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
  });

solution({ licensePlate: 'RGB255'  });
