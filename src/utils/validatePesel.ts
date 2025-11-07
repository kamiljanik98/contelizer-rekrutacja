export const validatePesel = (pesel: string): boolean => {
  if (!/^\d{11}$/.test(pesel)) return false;

  const digits = pesel.split("").map(Number);
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
  const controlSum =
    weights.reduce((acc, weight, i) => acc + weight * digits[i], 0) % 10;
  const controlDigit = (10 - controlSum) % 10;

  if (controlDigit !== digits[10]) return false;

  const year = parseInt(pesel.substring(0, 2), 10);
  const month = parseInt(pesel.substring(2, 4), 10);
  const day = parseInt(pesel.substring(4, 6), 10);

  let fullYear;
  if (month >= 1 && month <= 12) fullYear = 1900 + year;
  else if (month >= 21 && month <= 32) fullYear = 2000 + year;
  else if (month >= 41 && month <= 52) fullYear = 2100 + year;
  else if (month >= 61 && month <= 72) fullYear = 2200 + year;
  else if (month >= 81 && month <= 92) fullYear = 1800 + year;
  else return false;

  const correctedMonth = month % 20 === 0 ? 20 : month % 20;
  const date = new Date(fullYear, correctedMonth - 1, day);
  if (
    date.getFullYear() !== fullYear ||
    date.getMonth() !== correctedMonth - 1 ||
    date.getDate() !== day
  )
    return false;

  return true;
};
