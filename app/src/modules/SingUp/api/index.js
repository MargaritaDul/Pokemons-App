import api from "../../../api/config";

export const signUp = (body) => api.post("auth/signUn", body);
