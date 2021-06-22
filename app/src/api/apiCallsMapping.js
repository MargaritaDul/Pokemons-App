import * as signupActions from "../modules/SingUp/actions";
import * as signupAPI from "../modules/SingUp/api";

import * as loginActions from "../modules/Login/actions";
import * as loginAPI from "../modules/Login/api";

import * as getPokemonsActions from "../modules/PokemonsList/actions";
import * as getPokemonsAPI from "../modules/PokemonsList/api";

import * as getPokemonsDetailsActions from "../modules/PokemonsDetails/actions";
import * as getPokemonsDetailsAPI from "../modules/PokemonsDetails/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [signupActions.SIGN_UP_REQUEST]: signupAPI.signUp,

    [loginActions.SIGN_IN_REQUEST]: loginAPI.signIn,

    [getPokemonsActions.GET_POKEMONS_REQUEST]: getPokemonsAPI.getPokemons,

    [getPokemonsDetailsActions.GET_POKEMONS_DETAILS_REQUEST]:
      getPokemonsDetailsAPI.getPokemonsDetails,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw "Not mapped action";
  }

  return mapping[action.type];
};

export default apiCallsMapping;
