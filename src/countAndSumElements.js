function calculatePricesSum() {
  let pricesSum = 0;

  const prices = document.getElementsByClassName("a-offscreen");

  for (let i = 0; i < prices.length; i++) {
    pricesSum += parseInt(prices[i].innerHTML.slice(1));
  }

  return `$${pricesSum}`;
}
