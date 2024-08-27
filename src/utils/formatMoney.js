export const formatNumber = (input) => {
    const number = Number(input);
    console.log(typeof(number));
    // if (isNaN(number)) {
    //   throw new Error('Invalid input: The provided value is not a number.');
    // }
    return number.toLocaleString();
  }
  