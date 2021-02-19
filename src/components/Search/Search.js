import React, { useState, useEffect } from "react";
import Display from "../Display/Display";
import axios from "axios";

const Search = () => {
  const [coins, setCoins] = useState([]);
  const [search, setsSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
    `
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setsSearch(e.target.value);
  };

  const filteredCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="coin-app">
      <div>
        <h1>Bitcoin USD Stock Price</h1>
        <from>
          <input type="text" placeholder="Search" onChange={handleChange} />
        </from>
      </div>
      {filteredCoin.map((coin) => {
        return (
          <Display
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketCap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
};
export default Search;
