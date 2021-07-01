import api from "../../../api/config";


export const deletePokemon = (id) => api.delete(`cart/item/${id}`);