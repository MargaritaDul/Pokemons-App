import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import PokemonsDetailsPageLayout from "../components/PokemonsDetailsPageLayout";
import { GET_POKEMONS_DETAILS_REQUEST } from "../actions";

const PokemonsDetailsPageContainer = () => {
  const params = useParams();

  const dispatch = useDispatch();

  const { pokemonInfo } = useSelector((state) => state.getPokemonsDetails);

  useEffect(() => {
    dispatch(GET_POKEMONS_DETAILS_REQUEST(params.id));
  }, []);

  return <PokemonsDetailsPageLayout pokemonInfo={pokemonInfo} />;
};

export default PokemonsDetailsPageContainer;
