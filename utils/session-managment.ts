import { cookies } from "next/headers";

const userToken = "user-session-token";

export const setToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set(userToken, token);
};

export const getToken = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get(userToken);
  return token?.value;
};

export const removeToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete(userToken);
};
