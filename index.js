const getCryptoPrice = async (cryptoName, quantity, currencyCode) => {
  try {
    const id = cryptoName.toLowerCase();

    if (quantity < 0) {
      throw new Error("Quantity must be 0 or more!");
    }

    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`
    );

    if (!res.ok) throw new Error("Crypto Not Available");

    const data = await res.json();

    if (data.market_data.current_price.hasOwnProperty(currencyCode)) {
      throw new Error("Currency Not Available!");
    }

    const cryptoPrice = data.market_data.current_price[currencyCode];

    const totalCryptoPrice = cryptoPrice * quantity;

    return totalCryptoPrice;
  } catch (err) {
    if (err instanceof Error) {
      console.log(error);
    }
  }
};

module.exports = getCryptoPrice;
