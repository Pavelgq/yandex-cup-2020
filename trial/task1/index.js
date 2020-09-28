const twoMax = function (mas) {
    const res = {
      maxOne: mas[0],
      indexMaxOne: 0,
      maxTwo: mas[1],
      indexMaxTwo: 1
    }
  
    for (let i = 2; i < mas.length; i++) {
      if (res.maxOne < mas[i]) {
        if (res.maxOne < res.maxTwo) {
          res.maxOne = mas[i];
          res.indexMaxOne = i;
        } else {
          res.maxTwo =  mas[i];
          res.indexMaxTwo = i;
        }
      }else {
        if (res.maxTwo < mas[i]) {
          res.maxTwo = mas[i];
          res.indexMaxTwo = i;
        }
      }
    }
    if (res.maxOne < res.maxTwo) {
      let k = res.maxTwo; 
      let n = res.indexMaxTwo;
      res.maxTwo = res.maxOne; 
      res.indexMaxTwo = res.indexMaxOne;
      res.maxOne = k;
      res.indexMaxOne = n;
    }
    console.log(res)
    return res
   }
  
  const findLatestWeight = function (weights, i = weights.length - 1) {
    while (i > 0) {
      const max = twoMax(weights);
      weights[max.indexMaxOne] = 0
      weights[max.indexMaxTwo] = max.maxOne - max.maxTwo;
      i -= 1;
    }
  
    return twoMax(weights).maxOne;
  };
  
  module.exports = findLatestWeight;