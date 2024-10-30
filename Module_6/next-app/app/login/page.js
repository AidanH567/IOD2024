"use client";
import { useState } from "react";
import { AddMovieForm } from "../components/AddMovie";
import { MoviesList } from "../components/MoveList";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [attemptCount, setAttemptCount] = useState(0);
  const maxAttempts = 5;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
      setAttemptCount((prevCount) => prevCount + 1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setAttemptCount((prevCount) => prevCount + 1);
    } else if (!/[A-Z]/.test(userPassword)) {
      setSubmitResult("Password must contain at least one uppercase letter");
      setAttemptCount((prevCount) => prevCount + 1);
    } else {
      setSubmitResult("Successful login.");
      setAttemptCount(0); 
    }
  };

  return (
    <div className="LoginForm componentBox">
      {attemptCount < maxAttempts ? (
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label>
              Email Address:
              <input
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="formRow">
            <label>
              Password:
              <input
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </label>
          </div>
          <button>Log In</button>
          <p>{submitResult}</p>
        </form>
      ) : (
        <p style={{ color: "red" }}>Maximum login attempts reached. Please try again later.</p>
      )}
    </div>
  );
}

export default LoginForm;
