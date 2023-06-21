const getCryptoPrice = async (cryptoName, currencyCode) => {
  const id = cryptoName.toLowerCase();

  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`
    );

    if (!res.ok) throw new Error("Crypto Not Available");

    const data = await res.json();

    if (data.market_data.current_price.hasOwnProperty(currencyCode)) {
      throw new Error("Currency Not Available!");
    }

    const cryptoPriceData = data.market_data.current_price[currencyCode];

    return cryptoPriceData;
  } catch (err) {
    if (err instanceof Error) {
      console.log(error);
    }
  }
};

module.exports = getCryptoPrice;
