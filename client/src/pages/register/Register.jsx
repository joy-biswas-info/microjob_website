import { useState } from "react";
import "./Register.scss";
import upload from "../../utils/upload";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const naviget = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = await upload(file);
    try {
      await axios.post("http://localhost:8800/api/auth/register", {
        ...user,
        img: url,
      });
      // naviget("/");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="register">
      <div className="container">
        <h1>Create New Account</h1>
        <div className="wraper">
          <form onSubmit={handleSubmit}>
            <div className="left">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="john_doi"
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@gmail.com"
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
              />
              <label htmlFor="country">Country</label>
              <input
                type="country"
                name="country"
                id="country"
                onChange={handleChange}
              />
              <label htmlFor="profile">Profile Picture</label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <button type="submit">Create Accout</button>
              {loading && <p>Creating account...</p>}
            </div>
            <div className="right">
              <h1>I want to become a seller</h1>
              <label className="switch">
                <input
                  type="checkbox"
                  name="isSeller"
                  onChange={handleSeller}
                />
                <span className="slider round"></span>
              </label>
              <br />
              <label htmlFor="">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="e.g. 018448758576"
                onChange={handleChange}
              />
              <label htmlFor="">Description</label>
              <textarea
                name="desc"
                id="desc"
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
