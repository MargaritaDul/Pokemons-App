import { v4 as uuidv4 } from "uuid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { ROUTES } from "../../../../routes/routeNames";

const PokemonsDetailsPageLayout = ({ pokemonInfo, handleAddPokemon }) => {
  return (
    <div>
      <p> {pokemonInfo.name} </p>
      <img src={pokemonInfo.image}></img>
      <div>
        {pokemonInfo?.abilities?.map((ability) => (
          <div key={uuidv4()}>
            <p>
              {ability.title} --- {ability.description}
            </p>
          </div>
        ))}
      </div>
      <div>
        {pokemonInfo?.stats?.map((stat) => (
          <div key={uuidv4()}>
            <p>
              {stat.title} = {stat.value}
            </p>
          </div>
        ))}
      </div>
      <p> {pokemonInfo.price} $ </p>
      <div>
        <IconButton
          onClick={() => handleAddPokemon(pokemonInfo)}
          color="primary"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      <Link to={ROUTES.CART_PAGE}>
        <Button variant="contained">CART</Button>
      </Link>
    </div>
  );
};

export default PokemonsDetailsPageLayout;
