const getRandomInt = (min: number, max: number) => {
  let minVal = min;
  let maxVal = max;

  minVal = Math.ceil(min);
  maxVal = Math.floor(max);

  return Math.floor(Math.random() * (maxVal - minVal) + minVal);
};

export default getRandomInt;
  