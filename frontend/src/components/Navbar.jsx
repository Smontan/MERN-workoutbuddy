import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const handleSubmit = () => {
    logout();
  };

  const { user } = useAuthContext();

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>WorkoutBuddy</h1>
        </Link>
        <nav>
          {user ? (
            <div>
              <span>{user.email}</span>
              <button onClick={handleSubmit}>Logout</button>
            </div>
          ) : (
            <div>
              <Link to="./login">Login</Link>
              <Link to="./signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
