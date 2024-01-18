export const getRandomIntInclusive = (x, y) => {
  const min = Math.ceil(x);
  const max = Math.floor(y);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
};

export const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

export const calcHelper = (x, y) => {
  const actions = '+-*';
  const action = getRandomIntInclusive(0, 2);
  if (action === 0) {
    return [(x + y).toString(), actions[0]];
  }
  if (action === 1) {
    return [(x - y).toString(), actions[1]];
  }
  return [(x * y).toString(), actions[2]];
};
