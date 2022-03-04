import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { FirebaseError } from 'firebase/app';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
    logged: null,
  });

  const navigate = useNavigate();

  const { email, password, error, loading, logged } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if ( !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        email,
      });
      setData({ email: '', password: '', error: null, loading: false, logged: true });
      navigate("/");
    } catch (err) {
        setData({ ...data, error: err.message, loading: false });
    }
  }

  return (
    <div>
      <section>
        <h3>Login</h3>
        <form className="form" onSubmit={handleSubmit}>

          <div className="input_container">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={handleChange} />
          </div>

          <div className="input_container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
          </div>

          {error ? <p className="error">{error}</p> : null}
          {logged ? <Link to="/"></Link> : null}

          <div className='btn_container' style={{overflow: "hidden"}}>
            <button className='btn' disabled={loading} onClick={handleSubmit}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <Link to="/register">Register an account</Link>

        </form>
      </section>
    </div>
  )
}

export default Login