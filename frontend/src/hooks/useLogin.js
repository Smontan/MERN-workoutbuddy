import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = () => {
  const api = import.meta.env.VITE_API_BASE_URL;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${api}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      // create a token and save to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // dispatch the action type login
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
      setError(null);
    }
  };

  return { isLoading, error, login };
};
