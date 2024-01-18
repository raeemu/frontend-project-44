export const getRandomIntInclusive = (x, y) => {
  const min = Math.ceil(x);
  const max = Math.floor(y);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
};

export const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
