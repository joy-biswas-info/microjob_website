import { useState } from "react";
import "./Login.scss";
import newRequest from "../../utils/newRequest.js";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading.jsx";
const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsCompleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: ",",
    password: "",
  });
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await newRequest.post("/auth/login", user);
      localStorage.setItem("currentUser", JSON.stringify(res.data));

      setIsCompleted(true);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/");
      }, 1000);
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  };

  return (
    <div id="loginPage">
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userid">Username or email</label>
          <input
            type="text"
            name="username"
            placeholder="Johan"
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
          <input type="submit" value="Log in" />
        </form>
      </div>
      {isLoading && (
        <div className="loading">
          <Loading
            loading={isLoading}
            completed={isComplete}
            isError={isError}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
