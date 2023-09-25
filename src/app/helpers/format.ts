export function convertToInternationalCurrencySystem (number: number) {

  // Nine Zeroes for Billions
  return Math.abs(Number(number)) >= 1.0e+9

  ? (Math.abs(Number(number)) / 1.0e+9).toFixed(2) + "B"
  // Six Zeroes for Millions 
  : Math.abs(Number(number)) >= 1.0e+6

  ? (Math.abs(Number(number)) / 1.0e+6).toFixed(2) + "M"
  // Three Zeroes for Thousands
  : Math.abs(Number(number)) >= 1.0e+3

  ? (Math.abs(Number(number)) / 1.0e+3).toFixed(2) + "K"

  : Math.abs(Number(number));

}
