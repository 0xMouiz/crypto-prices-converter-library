# crypto-prices-converter

**crypto-prices-converter** is an npm package that provides a simple way to retrieve cryptocurrency prices and convert them into different fiat currencies. It supports various cryptocurrencies, including Bitcoin, Ethereum, Binance Coin (BNB), Ripple (XRP), and more. The package requires the currency names to be specified in the format of lowercase ISO 4217 currency codes (e.g., "usd" for United States Dollar).

# Installation

To install **crypto-prices-converter**, use npm:

```bash
npm install crypto-prices-converter
```

# Usage

To use the package, you need to require the **crypto-prices-converter** module:

```js
const { convertCurrency, convertCrypto } = require("crypto-prices-converter");
```

The **getCryptoPrice** function allows you to retrieve the price of a cryptocurrency in a specific fiat currency. It takes two parameters: the cryptocurrency symbol and the fiat currency code. Here's an example:

```js
console.log(getCryptoPrice("bitcoin", 2, "usd"));
```

The package provides two functions: **convertCurrency** and **convertCrypto**.

**convertCurrency(currencyCode, quantity, cryptoName)**
This function converts a specified quantity of a cryptocurrency into the specified fiat currency. It takes three parameters: the target fiat currency code, the quantity of the cryptocurrency, and the name of the cryptocurrency. Here's an example:

```js
const { convertCurrency } = require("crypto-prices-converter");

(async () => {
  try {
    const cryptoQuantity = await convertCurrency("usd", 2, "bitcoin");
    console.log(cryptoQuantity);
  } catch (err) {
    console.error(err);
  }
})();
```

This example converts 2 Bitcoins into US Dollars (USD) and logs the converted quantity to the console.

**convertCrypto(cryptoName, quantity, currencyCode)**
This function converts a specified quantity of a cryptocurrency into the specified fiat currency. It takes three parameters: the name of the cryptocurrency, the quantity of the cryptocurrency, and the target fiat currency code. Here's an example:

```js
const { convertCrypto } = require("crypto-prices-converter");

(async () => {
  try {
    const totalCryptoPrice = await convertCrypto("bitcoin", 2, "usd");
    console.log(totalCryptoPrice);
  } catch (err) {
    console.error(err);
  }
})();
```

This example calculates the total price of 2 Bitcoins in US Dollars (USD) and logs the result to the console.

# All supported currencies:

* AED: United Arab Emirates Dirham
* ARS: Argentine Peso
* AUD: Australian Dollar
* BDT: Bangladeshi Taka
* BHD: Bahraini Dinar
* BMD: Bermudian Dollar
* BRL: Brazilian Real
* CAD: Canadian Dollar
* CHF: Swiss Franc
* CLP: Chilean Peso
* CNY: Chinese Yuan
* CZK: Czech Koruna
* DKK: Danish Krone
* EUR: Euro
* GBP: British Pound Sterling
* HKD: Hong Kong Dollar
* HUF: Hungarian Forint
* IDR: Indonesian Rupiah
* INR: Indian Rupee
* JPY: Japanese Yen
* KRW: South Korean Won
* KWD: Kuwaiti Dinar
* LKR: Sri Lankan Rupee
* MXN: Mexican Peso
* MYR: Malaysian Ringgit
* NGN: Nigerian Naira
* NOK: Norwegian Krone
* NZD: New Zealand Dollar
* PHP: Philippine Peso
* PKR: Pakistani Rupee
* PLN: Polish Złoty
* RUB: Russian Ruble
* SAR: Saudi Riyal
* SEK: Swedish Krona
* SGD: Singapore Dollar
* THB: Thai Baht
* TRY: Turkish Lira
* TWD: New Taiwan Dollar
* UAH: Ukrainian Hryvnia
* USD: United States Dollar
* VEF: Venezuelan Bolívar
* VND: Vietnamese Đồng
* XAG: Silver Ounce
* XAU: Gold Ounce
* XDR: Special Drawing Rights (IMF

# Repository

Feel free to explore the repository, contribute, or submit any issues or feature requests.
