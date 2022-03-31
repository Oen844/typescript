(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
      total += prices[i];
    }
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }




  const rta = calcTotal([1, 2, 3, 4, 5]);
  console.log('rta', rta);
  printTotal([1, 2, 3, 4, 5]);

})();
