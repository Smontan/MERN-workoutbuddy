import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { useWorkoutContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const { user } = useAuthContext();
  const api = import.meta.env.VITE_API_BASE_URL;

  const handleClick = async () => {
    if (!user) return;

    const response = await fetch(`${api}/api/workouts/` + workout._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (response.ok) dispatch({ type: "DELETE_WORKOUT", payload: json });
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Rep: </strong>
        {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};
export default WorkoutDetails;
