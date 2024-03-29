import { useState } from "react";
import "../stylesheets/login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "../redux/authentication/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.current_user.loading);
  const error = useSelector((state) => state.current_user.error);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(
      loginUser({
        user: {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
      })
    );

    try {
      if (res) {
        navigate("/destinations");
        window.location.reload();
      } else {
        alert("You need to register");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth-body">
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <button type="submit" disabled={loading} className="submit-button">
              {loading ? "Logging in..." : "Log In"}
            </button>
          </div>
        </form>
        <div>
          <NavLink className="registration" to="/registration">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
