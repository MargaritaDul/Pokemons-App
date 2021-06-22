import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";

import PokemonsDetailsPageLayout from "../components/PokemonsDetailsPageLayout";
import { GET_POKEMONS_DETAILS_REQUEST } from "../../../modules/PokemonsDetails/actions";

const PokemonsDetailsPageContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_POKEMONS_DETAILS_REQUEST(params.id));
  }, []);

  return <PokemonsDetailsPageLayout />;
};

export default PokemonsDetailsPageContainer;
