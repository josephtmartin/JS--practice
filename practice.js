// AGE IN DOG YEARS
const calculateAgeInDogYears = (age) => {
  const ageInDogYears = age / 7;

  return ageInDogYears;
};

const dogAge = calculateAgeInDogYears(22);
console.log(dogAge);

//BEST IN SHOW
const favoriteDogBreed = (string) => {
  if (string === 'schnauzer') {
    return 'My favorite dog breed is schnauzer';
  } else if (string === 'meow') {
    return 'I like cats';
  }
};

const myFavorite = favoriteDogBreed('schnauzer');

console.log('When it comes to pets, ' + myFavorite);

// ADDITION
const add = (num1, num3, num2) => {
  return num3 + num1 + num2;
};

console.log(add(17, 4, 11));

// SELF-DRIVING CARS
const go = (direction, speed) => {
  if (direction === 'forwards' && speed <= 75) {
    return 'The car is moving ' + direction + ' at ' + speed + ' mph.';
  } else if (direction === 'backwards' && speed <= 75) {
    return 'The car is moving ' + direction + ' at ' + speed + ' mph.';
  } else if (direction === 'in circles' && speed <= 75) {
    return 'The car is moving ' + direction + ' at ' + speed + ' mph.';
  } else if (speed > 75) {
    return 'The car is moving ' + direction + ' at ' + speed + ' mph.' + ' SLOW DOWN!';
  }
};

console.log(go('backwards', 76));

// EVENS OR ODDS
const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};

console.log(evenOrOdd(13))
//TODO Exlporation tasks on EVEN OR ODD