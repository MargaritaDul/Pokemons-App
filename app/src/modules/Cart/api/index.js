import api from "../../../api/config";

export const addPokemon = (body) => api.post("cart/item", body);
