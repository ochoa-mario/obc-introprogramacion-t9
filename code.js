// Crea una clase Persona con las siguientes variables: La edad, El nombre, El teléfono. Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase. Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla. Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador

class Persona {
  constructor (edad, nombre, telefono){
    this.edad = edad;
    this.nombre = nombre;
    this.telefono = telefono;
  }
};
class Cliente extends Persona {
  constructor (edad, nombre, telefono, credito){
    super (edad, nombre, telefono);
    this.credito = credito;
  }
};
class Trabajador extends Persona {
  constructor (edad, nombre, telefono, salario){
    super (edad, nombre, telefono);
    this.salario = salario;
  };
};

let cliente1 = new Cliente(25, "Juan", 123456790, 200000000);
console.log(cliente1.edad);
console.log(cliente1.nombre);
console.log(cliente1.telefono);
console.log(cliente1.credito);

let trabajador1 = new Trabajador(52, "Pablo", 9876543210, 5000);
console.log(trabajador1.edad);
console.log(trabajador1.nombre);
console.log(trabajador1.telefono);
console.log(trabajador1.salario);
