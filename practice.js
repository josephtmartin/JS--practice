// AGE IN DOG YEARS
const calculateAgeInDogYears = (age) => {
  const ageInDogYears = age / 7;

  return ageInDogYears;
};

const dogAge = calculateAgeInDogYears(22);

//BEST IN SHOW
const favoriteDogBreed = (string) => {
  if (string === 'schnauzer') {
    return 'My favorite dog breed is schnauzer';
  } else if (string === 'meow') {
    return 'I like cats';
  }
};

const myFavorite = favoriteDogBreed('schnauzer');

// ADDITION
const add = (num1, num3, num2) => {
  return num3 + num1 + num2;
};

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

// EVENS OR ODDS
const array = [2, 4, 6, 3, 5, 7];
const evenOrOdd = (num) => {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};

for (const element of array) {
  evenOrOdd(element);
}

//DOUBLE FUNCTIONS
const words = [
  'The',
  'killing',
  'complex',
  'houses',
  'married',
  'kittens',
  'and',
  'single',
  'soldiers',
  'and',
  'their',
  'kleptomaniacal',
  'families',
];

const startsWithK = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].startsWith('k')) {
      array.splice(i, 1);
    }
  }
};
const includesK = startsWithK(words);

const stringBuilder = (array) => {
  return array.join(' ');
};
stringBuilder(words);

// YOU CAN TUNE A PIANO, BUT YOU CAN'T...
const cast = Math.random() * 100;

const SvenAttempts = () => {
  if (cast >= 66) {
    return 'Sven hooked a tuna! :)';
  } else {
    return 'Sven came up empty-handed. :(';
  }
};

// FAST FOOD
const orderMeal = (sandwich, dessert, drink, side) => {
  return {
    sandwich: sandwich,
    side: side,
    drink: drink,
    dessert: dessert,
  };
};
const takeOutBag = orderMeal('Ultimate Slammer', 'Fudge sundae', 'Mr. Pepper', 'Potato wedges');

// SAME CHORES. DIFFERENT DAYS
const object = {
  firstName: 'Joseph',
  lastName: 'Martin'
}

const chore1 = () => 'made his bed'
const chore2 = () => 'brushed his teeth'
const chore3 = () => 'cooked breakfast'
const chore4 = () => 'did the laundry'
const chore5 = () => 'mowed the lawn'
const chore6 = () => 'took a shower'

const choreObject = (object, chore) => `${object.firstName} ${object.lastName} ${chore}`

const lazyDay = (chore, person, day) => `${person.firstName} ${person.lastName} ${chore} on ${day}`

const dayPlanner = (chore1, chore2, chore3, person, day) => `On ${day} ${person.firstName} ${person.lastName} ${chore1}, and ${person.firstName} ${person.lastName} ${chore2}, and ${person.firstName} ${person.lastName} ${chore3}.`

console.log(dayPlanner(chore1(), chore2(), chore3(), object, 'Tuesday'))