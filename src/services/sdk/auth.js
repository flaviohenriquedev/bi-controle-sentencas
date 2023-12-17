import { axiosInstance } from "./axiosIntance";

export const login = async ({ username, password }) => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/auth/login",
      auth: { username, password },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const authCheck = async () => {
  try {
    const res = await axiosInstance({
      method: "get",
      url: "/auth/authCheck",
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const forgotPassword = async ({ email }) => {
  try {
    const res = await axiosInstance({
      method: "post",
      url: "/auth/forgot-password",
      data: { email },
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
