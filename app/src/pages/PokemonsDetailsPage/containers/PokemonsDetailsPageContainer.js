import { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PokemonsDetailsPageLayout from "../components/PokemonsDetailsPageLayout";
import { GET_POKEMONS_DETAILS_REQUEST } from "../actions";
import { ADD_POKEMON_REQUEST } from "../../../modules/Cart/actions";

const PokemonsDetailsPageContainer = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const { pokemonInfo } = useSelector((state) => state.getPokemonsDetails);
  useEffect(() => {
    dispatch(GET_POKEMONS_DETAILS_REQUEST(params.id));
  }, []);

  const handleAddPokemon = useCallback(
    (pokemon) => {
      const { id, name, image, price } = pokemon;
      dispatch(ADD_POKEMON_REQUEST({ id, name, image, price, quantity: 1 }));
    },
    [dispatch]
  );

  return (
    <PokemonsDetailsPageLayout
      pokemonInfo={pokemonInfo}
      handleAddPokemon={handleAddPokemon}
    />
  );
};

export default PokemonsDetailsPageContainer;
