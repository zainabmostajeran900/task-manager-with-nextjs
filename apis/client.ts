import { getToken } from "@/utils/session-managment";
import axios from "axios";

export const httpReq = async() => {
    const token = await getToken()
  return axios.create({
    baseURL: "https://town-board.pockethost.io/",
    headers: { Authorization: token },
  });
};
