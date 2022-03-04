import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Link } from "react-router-dom";

const Contact = () => {
  const { user } = useContext(AuthContext);
  
  const handleButtonClick = (event) => {
    event.preventDefault();
    const elements = document.querySelectorAll("div.input_container");
    const elements2 = document.querySelectorAll("div.btn_container");
    console.log(elements);
    elements[0].remove();
    elements[1].remove();
    elements[2].remove();
    elements2[0].remove();
    let x = document.getElementById("submit_text");
    let y = document.getElementById("link");
      if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
      }
  }

  const handleReload = () => {
    document.location.reload();
  }

  return (
    <div>
      <section>
        <h3>Contact</h3>
        <form className="form">
            <>
            <p style={{ display: "none", color: "green", textAlign: "center" }} id="submit_text">Successfully submitted form!</p>
            <Link to="/contact" id="link" onClick={handleReload} style={{ display: "none" }}>Submit another response</Link>
            {user ? (
              <>
                <div className="input_container">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" placeholder="User" readOnly />
                </div>
    
                <div className="input_container" id="email">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" placeholder="test@test.com" readOnly />
                </div>
              </> ) : (
              <>
                <div className="input_container">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" defaultValue={""} />
                </div>
    
                <div className="input_container">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" defaultValue={""} />
                </div>
              </> )
              }
    
              <div className="input_container">
                <label htmlFor="message">Message</label>
                <textarea type="textarea" name="Message" rows={5} />
              </div>
    
              <div className='btn_container' id='btn'>
                <button className='btn' onClick={handleButtonClick}>Submit</button>
              </div>
            </>

        </form>
      </section>
    </div>
  )
}

export default Contact