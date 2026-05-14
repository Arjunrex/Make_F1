// App.js
import React from "react";
import "./App.css";

function User() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://i.pravatar.cc/200"
          alt="profile"
          className="profile-img"
        />

        <h1>Arjun Rex</h1>
        <h3>Computer Science and Engineering</h3>
        <h3>MERN Stack Developer</h3>

        <p>
          Passionate frontend developer with knowledge in React JS,
          JavaScript, HTML, CSS, and API Integration.
        </p>

        <div className="info">
          <p><strong>Email:</strong> arjun@example.com</p>
          <p><strong>Phone:</strong> +91 8072270813</p>
          <p><strong>Location:</strong> Tenkasi, India</p>

        </div>

        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default User;