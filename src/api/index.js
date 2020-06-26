import { API } from "../config";

export const createUser = (user) => {
  return fetch(`${API}/user/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: user,
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const addName = (userName) => {
  return fetch(`${API}/name/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userName),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getNames = () => {
  return fetch(`${API}/names`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getUsers = (sortBy) => {
  return fetch(`${API}/users?sortBy=${sortBy}&order=desc`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};
