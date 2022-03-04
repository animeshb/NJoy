import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore"
import { FirebaseError } from 'firebase/app';

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
    created: null,
    rpassword: "",
  });

  const { name, email, password, error, loading, created, rpassword } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" });
    } else if (password != rpassword) {
      setData({ ...data, error: "Passwords must be the same" });
    } else {
      try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,
          name,
          email,
        });
        setData({name: '', email: '', password: '', error: null, loading: false, created: "Account created successfully!", rpassword: ''});
      } catch (err) {
          setData({ ...data, error: err.message, loading: false });
      }
    }
  }

  return (
    <div>
      <section>
        <h3>Register your Account</h3>
        <form className="form" onSubmit={handleSubmit}>
          
          <div className="input_container">
            <label htmlFor="text">Name</label>
            <input type="text" name="name" value={name} onChange={handleChange} />
          </div>

          <div className="input_container">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={handleChange} />
          </div>

          <div className="input_container">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
          </div>

          <div className="input_container">
            <label htmlFor="password">Repeat Password</label>
            <input type="password" name="rpassword" value={rpassword} onChange={handleChange} />
          </div>

          {error ? <p className="error">{error}</p> : null}
          {created ? <p className="success">{created}</p> : null}

          <div className='btn_container' style={{overflow: "hidden"}}>
            <button className='btn' disabled={loading}>{loading ? "Creating..." : "Register"}</button>
          </div>

          <Link to="/login">Back to Login</Link>

        </form>
      </section>
    </div>
  )
}

export default Register