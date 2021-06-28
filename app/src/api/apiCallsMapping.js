import * as signupActions from "../pages/SignUpPage/actions";
import * as signupAPI from "../pages/SignUpPage/api";

import * as loginActions from "../modules/Login/actions";
import * as loginAPI from "../modules/Login/api";

import * as getPokemonsActions from "../pages/PokemonsPage/actions";
import * as getPokemonsAPI from "../pages/PokemonsPage/api";

import * as getPokemonsDetailsActions from "../pages/PokemonsDetailsPage/actions";
import * as getPokemonsDetailsAPI from "../pages/PokemonsDetailsPage/api";

import * as addPokemonActions from "../modules/Cart/actions";
import * as addPokemonAPI from "../modules/Cart/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [signupActions.SIGN_UP_REQUEST]: signupAPI.signUp,

    [loginActions.SIGN_IN_REQUEST]: loginAPI.signIn,

    [getPokemonsActions.GET_POKEMONS_REQUEST]: getPokemonsAPI.getPokemons,

    [getPokemonsDetailsActions.GET_POKEMONS_DETAILS_REQUEST]:
      getPokemonsDetailsAPI.getPokemonsDetails,

    [addPokemonActions.ADD_POKEMON_REQUEST]: addPokemonAPI.addPokemon,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw "Not mapped action";
  }

  return mapping[action.type];
};

export default apiCallsMapping;
