"use client"
import { SessionProvider } from "next-auth/react"
import { useState } from "react"
import { signIn } from "next-auth/react";


export default function Login(){
    return(
        <div className="auth-page">
            <div className="auth-background"></div>
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <a href="#"><span className="logo">Finsta</span></a>
                        <h1 className="auth-title">Welcome back..</h1>
                        <p className="auth-subtitle">Enter your credentials to access your account</p>
                    </div>
                    <form className="auth-form" onSubmit={(e) => e.preventDefault}>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <div className="input-wrapper">
                                <input id="email" type="email" placeholder="name@example.com" className="form-input"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="password-header">
                                <label htmlFor="password" className="form-label">Password</label>
                                <a href="#" className="forgot-password">Forgot Password?</a>
                            </div>
                            <div className="input-wrapper">
                                <input id="password" type="password" placeholder="Enter your password" className="form-input"/>
                            </div>
                        </div>
                        <div className="remember-me">
                            <label className="checkbox-container">
                                <input type="checkbox"/>
                                <span className="checkmark"></span>
                                Remember me
                            </label>
                        </div>
                        <button type="button" className="auth-button">Sign In</button>
                    </form>

                    <div className="divider">
                        <span>OR</span>
                    </div>

                    <button onClick={() => signIn("google", { callbackUrl: "/" })} className="google-button">
                        <img src="/image.png" alt="Google" className="google-icon" />
                            Sign in with Google
                    </button>

                    <div className="auth-footer">
                        <p>Don't have an account ?<a className="auth-link" href="signup">Create Account</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
