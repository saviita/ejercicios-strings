
// EJ1 Crea una funcion que reciba una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Resuélvelo con un if-else
const getWord = word => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};
getWord('coche');
getWord('amapola');

// EJ2 Repite el ejercicio anterior pero con un operador ternario
const getWord1 = word1 => {
  word1.length > 5 ? console.log(word1.toUpperCase()) : console.log(word.toLowerCase());
};
getWord1('azul');
getWord1('bicicleta');

//EJ3 Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación"
const checkConjugation = verb => {
  if (verb.endsWith('ar')) {
    return 'es de la primera conjugación';
  }

  if (verb.endsWith('er')) {
    return 'es de la segunda conjugación';
  }

  if (verb.endsWith('ir')) {
    return 'es de la tercera conjugación';
  }

  return false;
};

const getVerb = (verb1, verb2) => {
  const verb1Result = checkConjugation(verb1);
  const verb2Result = checkConjugation(verb2);

  if (!verb1Result || !verb2Result) {
    console.log('Uno de los verbos es incorrecto');
    return;
  }

  console.log(`El verbo ${verb1} ${verb1Result} y el verbo ${verb2} ${verb2Result}`);
};
getVerb('andar', 'comer');

//EJ4 Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona"
const getRandomLetter = word => {
  const randomeNumberA = Math.floor(Math.random() * word.length);
  const randomeNumberB = Math.floor(Math.random() * word.length);

  const firstLetter = word.charAt(randomeNumberA);
  const secondLetter = word.charAt(randomeNumberB);

  return firstLetter + secondLetter;
};

const generateWord = (wordA, wordB, wordC) => {
  const first = getRandomLetter(wordA);
  const second = getRandomLetter(wordB);
  const third = getRandomLetter(wordC);

  console.log(first + second + third);
};
generateWord('Hola', 'Adiós', 'Mano');

//EJ5 Crea una función que reciba un email e imprima por separado el nombre y el dominio. Por ejemplo, si recibe "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com"
const getEmail = email => {
  const atPosition = email.indexOf('@');
  const name = email.substring(0, atPosition);
  const domain = email.substring(atPosition + 1);
  console.log(`El usuario es ${name} y el dominio es ${domain}`);
};

//EJ6 Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra
const randomLetter = randomWord => {
  const randomNumber = Math.floor(Math.random() * randomWord.length);
  const randomLetter = randomWord.charAt(randomNumber);
  console.log(randomLetter);
};

//EJ7 Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs
const intercalateLetters = word => {
  console.log(
    word.charAt(0).toLowerCase() +
      word.charAt(1).toUpperCase() +
      word.charAt(2).toLowerCase() +
      word.charAt(3).toUpperCase() +
      word.charAt(4).toLowerCase()
  );
};

//EJ8 Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87"
const generateUsername = (name, surname) => {
  const userNameAndSurname = name.charAt(0).toUpperCase + surname;
  const randomNumber = Math.ceil(Math.random() * 100);

  console.log(userNameAndSurname + randomNumber);
};