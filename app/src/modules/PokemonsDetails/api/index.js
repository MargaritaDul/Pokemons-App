import api from "../../../api/config";

export const getPokemonsDetails = (id) => api.get(`products/${id}`);
