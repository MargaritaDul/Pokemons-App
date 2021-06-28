import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import PokemonsPageLayout from "../components/PokemonsPageLayout";
import { CHANGE_PAGE, GET_POKEMONS_REQUEST } from "../actions";
import { ROUTES } from "../../../routes/routeNames";
import { SIGN_OUT } from "../../../modules/Login/actions";
import { ADD_POKEMON_REQUEST } from "../../../modules/Cart/actions";

const PokemonsPageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { itemsList, isLoading, currentPage } = useSelector(
    (state) => state.getPokemons
  );
  const { isAuth } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST(currentPage));
  }, [currentPage]);

  const handlePageChange = useCallback((page) => {
    dispatch(CHANGE_PAGE(page));
  }, []);

  const handleGoToDetails = useCallback(
    (id) => {
      history.push(`${ROUTES.POKEMONS_PAGE}/${id}`);
    },
    [history]
  );

  const handleLogout = useCallback(() => {
    dispatch(SIGN_OUT());
  }, []);

  const handleAddPokemon = useCallback(
    (id, name, price) => {
      console.log(id, name, price);
      dispatch(ADD_POKEMON_REQUEST());
    },
    [dispatch]
  );

  return (
    <PokemonsPageLayout
      itemsList={itemsList}
      isLoading={isLoading}
      handleGoToDetails={handleGoToDetails}
      handleLogout={handleLogout}
      isAuth={isAuth}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      handleAddPokemon={handleAddPokemon}
    />
  );
};

export default PokemonsPageContainer;
