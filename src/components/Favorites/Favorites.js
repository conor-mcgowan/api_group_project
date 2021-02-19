import React from "react";
import Display from "../Display/Display";
import { connect } from "react-redux";
import { deleteFavorite } from "../../redux/actions";

const Favorites = (props) => {
  return (
    <>
      <h1>FavoritesPage</h1>
      <div>
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
      </div>
    </>
  );
};

const mapDispatchToProps = {
  deleteFavorite,
};

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
