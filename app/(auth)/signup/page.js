"use client";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/app/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function createUser(e) {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    router.push("/");
  }

  async function handleGoogleSignin(e) {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    router.push("/");
  }

  return (
    <div className="auth-page">
      <div className="auth-background"></div>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <a href="#">
              <span className="logo">Finsta</span>
            </a>
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Join Finsta to manage your finances</p>
          </div>
          <form className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name" className="form-label">
                  First Name
                </label>
                <div className="input-wrapper">
                  <input
                    id="first-name"
                    type="text"
                    className="form-input"
                    placeholder="Varun"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="last-name" className="form-label">
                  Last Name
                </label>
                <div className="input-wrapper">
                  <input
                    id="last-name"
                    type="text"
                    className="form-input"
                    placeholder="Udata"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email{" "}
              </label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type="email"
                  placeholder="name@example.com"
                  className="form-input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Password{" "}
              </label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type="email"
                  placeholder="Create a password"
                  className="form-input"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="password-hint">Must be at least 8 characters</p>
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password" className="form-label">
                Confirm a Password
              </label>
              <div className="input-wrapper">
                <input
                  id="consirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  className="form-input"
                />
              </div>
            </div>
            <div className="terms-agreements">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark"></span>I agree to the{" "}
                <a href="#" className="auth-link">
                  {" "}
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="auth-link">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button type="button" className="auth-button" onClick={createUser}>
              Create Account
            </button>
          </form>
          <button onClick={handleGoogleSignin} className="google-button">
            <img src="/image.png" alt="Google" className="google-icon" />
            Sign up with Google
          </button>
          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <a className="auth-link" href="/login">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
