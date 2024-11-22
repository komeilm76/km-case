import _ from 'lodash';

const camel = (entry: string) => {
  return _.camelCase(entry);
};

const pascal = (entry: string) => {
  return _.upperFirst(_.camelCase(entry));
};

const kebab = (entry: string) => {
  return _.kebabCase(entry);
};

const snake = (entry: string) => {
  return _.snakeCase(entry);
};
const upperSnake = (entry: string) => {
  return _.toUpper(_.snakeCase(entry));
};

const dot = (entry: string) => {
  return _.kebabCase(entry).split('-').join('.');
};

const lower = (entry: string) => {
  return _.lowerCase(entry);
};

const upper = (entry: string) => {
  return _.upperCase(entry);
};

const start = (entry: string) => {
  return _.startCase(entry);
};

const train = (entry: string) => {
  return _.startCase(entry).split(' ').join('-');
};

const flat = (entry: string) => {
  return _.toLower(entry);
};

const cases = (entry: string) => {
  return {
    camel: camel(entry),
    pascaal: pascal(entry),
    kebab: kebab(entry),
    snake: snake(entry),
    lower: lower(entry),
    upper: upper(entry),
    start: start(entry),
    dot: dot(entry),
    upperSnake: upperSnake(entry),
    train: train(entry),
    flat: flat(entry),
  };
};
export default {
  cases,
  camel,
  pascal,
  kebab,
  snake,
  lower,
  upper,
  start,
  dot,
  upperSnake,
  train,
  flat,
};
