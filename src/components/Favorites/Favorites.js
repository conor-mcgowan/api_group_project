import React from "react";
import Display from "../Display/Display";
import { deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";

const Favorites = (props) => {
  return (
    <>
      <h1>FavoritesPage</h1>
      <div>
        <Display
          name={props.coin.name}
          key={props.coin.id}
          image={props.coin.image}
          symbol={props.coin.symbol}
          marketCap={props.coin.market_cap}
          price={props.coin.current_price}
          priceChange={props.coin.price_change_percentage_24h}
          volume={props.coin.total_volume}
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
