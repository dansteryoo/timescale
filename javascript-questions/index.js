const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  const marvel = [];

  for (each of heroes) {
    if (each["publisher"] === "Marvel Comics") {
      marvel.push(each["superhero"]);
    }
  }

  return marvel;
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  const arr = [];

  for (each of heroes) {
    let characters = each["characters"].split(", ");
      arr.push({...each, characters});
  }

  return arr;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  const hash = {};

  for (each of heroes) {
    let publisher = each["publisher"];
    if (hash[publisher]) {
      hash[publisher].push(each);
    } else {
      hash[publisher] = [each]
    }
  }

  return hash;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  const arr = [];

  for (each of heroes) {
    let characters = each["characters"].split(", ");
    if (characters.length > 1) {
      arr.push({ ...each, characters });
    }
  }

  return arr;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
