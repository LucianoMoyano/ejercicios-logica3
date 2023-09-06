/* Callback
Debes crear una Función llamada callback
que reciba como Parámetros un número y una Función.
Esta deberá retornar el resultado de esa función pasándole como argumento el número que llega por parámetro.

Teoria de callbacks: click aqui

Un callback (llamada de vuelta) es una función que recibe como argumento otra función y la ejecuta. Así, la función contenedora elige cuándo ejecutar el callback.

Ejemplo:
callback(5, (num)=>{return num*10}) debe retornar 50
callback(25, (num)=>{return num/5}) debe retornar 5
 */

const callback = (num, fun) => {
  //PASAMOS LOS PARAMETROS DE LA FUNCION CALLBACK

  return fun(num);
  //RETORNA EL RESULTADO DE ESA FUNCION
};

/* Nuevo Arreglo

Debés crear una función llamada `nuevoArreglo`
que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

Ejemplo: 

nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
 */

/* function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 0; i < number; i++) {
    newArray[i] = i + 1;
  }
  return newArray;
} */

// push: agregarme o pushiarme los numeros que estan en mi indice a la variable que yo le estoy indicando
//push() añade un nuevo elemento al final del Arreglo.
/* function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 0; i <= number - 1; i++) {
    newArray.push(i + 1);
  }

  return newArray;
} */

function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}

nuevoArreglo(10);

/* Arreglos
Investiga los siguientes métodos de los arreglos y replica su funcionamiento de manera lógica al igual que lo hiciste en el ejercicio número 5: */

//El método join() convierte un Arreglo en una cadena de caracteres.
//Cuando hacemos join() no modificamos el Arreglo original sino que tomamos sus elementos y los manipulamos.
//1. “join([1,2,3,4,5], “ ”)” debe retornar “1 2 3 4 5”

const join = (arr, j) => {
  //creo la funcion y a la arrow le paso dos parametros
  // j es lo que yo utilizo para separar cada desglozamiento
  let string = `${arr[0]}`;
  //creo la variable string que lo arranco con la primera posicion que tenga el array
  for (let i = 1; i < arr.length; i++) {
    // recorro el arreglo arrancando desde la primera posicion hasta el largo del arreglo
    string += j + arr[i];
    //le paso lo que hay en j + lo que contenga arr posicionado en  mi indice
  }
  return string;
  // retorno la variable
};

join([1, 2, 3, 4, 5], " ");

//El método .pop() saca el último elemento del Arreglo y lo retorna. Ese valor, a su vez, lo podemos guardar para volverlo a usar. no lleva Argumentos y solamente saca el último elemento, uno por vez.

//El método .splice() elimina de un Arreglo una cantidad de elementos a partir de una posición dada. podemos elegir desde dónde sacar uno o más elementos de un Arreglo.

//2. “pop([1,2,3,4,5])” debe retornar 5

/* const pop = (arr) => {

return arr.splice(arr.length - 1)[0]

} */

const pop = (arr) => {
  for (let i = 0; arr.length - 1; i++) {
    if (i === arr.length - 1) {
      return arr[i];
    }
  }
};

pop([1, 2, 3, 4, 5]);

//.filter() es un método que retorna un nuevo Arreglo, con los datos filtrados según una Función que le pasamos por Parámetro.  podemos filtrar Arreglos que contengan cualquier tipo de datos.

//3. “filter([1,2,3,4,5], (e)=>{return e%2===0})” debe retornar [2, 4]

const filter = (arr, callback) => {
  const newArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    //se puede sacar el  = y el -1
    if (callback(arr[i]) === true) {
      //si se pone la comparación a false devuelve los numero impares
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
filter([1, 2, 3, 4, 5], (e) => {
  return e % 2 === 0;
});

//La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array y objetos similares a array

/* const filter = (arr, callback) => {
    //
    const newArr = []

    for(const element of arr){
       if(callback(element) === true){
           newArr.push(element)
       }
    }
    return newArr ;
} */

function filter(arr, fn) {
  let temp = [];
  arr.forEach((x) => {
    if (fn(x)) {
      temp.push(x);
    }
  });
  return temp;
}
console.log(
  filter([1, 2, 3, 4, 5], (e) => {
    return e % 2 === 0;
  })
);

//El método .map() es una forma de iterar sobre cada elemento del arreglo. Recibe una función que tiene dos argumentos (el elemento y el índice) y retorna el nuevo valor del elemento.

//4. “map([1,2,3,4,5], (e)=>{return e * 10})” debe retornar [10, 20, 30, 40, 50]

function map(arr, fun) {
  let newArr = [];
  for (let i = 1; arr.length; i++) {
    newArr.push(fun(i));
  }
  return newArr;
}

//La sentencia sentencia for...of ejecuta un bloque de código para cada elemento de un objeto iterable, como lo son: String, Array y objetos similares a array

const map = (arr, callback) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(callback(element));
  }
  return newArr;
};

map([1, 2, 3, 4, 5], (e) => {
  return e * 10;
});
