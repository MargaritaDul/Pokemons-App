import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import PokemonsPageLayout from "../components/PokemonsPageLayout";
import { GET_POKEMONS_REQUEST } from "../../../modules/PokemonsList/actions";
import { ROUTES } from "../../../routes/routeNames";

const PokemonsPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { itemsList, isLoading } = useSelector((state) => state.getPokemons);

  useEffect(() => {
    if (itemsList.length === 0) {
      dispatch(GET_POKEMONS_REQUEST());
    }
  }, [itemsList.length]);

  const handleGoToDetails = useCallback(
    (id) => {
      history.push(`${ROUTES.POKEMONS_PAGE}/${id}`);
    },
    [history]
  );

  return (
    <PokemonsPageLayout
      itemsList={itemsList}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
    />
  );
};

export default PokemonsPageContainer;
