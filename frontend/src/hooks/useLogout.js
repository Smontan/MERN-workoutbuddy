import { useAuthContext } from "../hooks/useAuthContext";
import { useWorkoutContext } from "./useWorkoutsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch : dispatchWorkout } = useWorkoutContext()

  const logout = () => {
    // remove user in the local storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchWorkout({ type: "SET_WORKOUTS", payload: null })
  };

  return { logout };
};
