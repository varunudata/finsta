"use client"
import { useState } from "react"

export default function Profile(){
    const [userData, setUserData] = useState({
    firstName: "Varun",
    lastName: "Udata",
    email: "varun.udata@example.com",
    phone: "+91 00000 00000",
    address: "123 Main St, Anytown, USA",
    language: "English",
    notifications: true,
  })

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="logo">Finsta</h1>
                <div className="main-navigation">
                    <a href="login" className="nav-link">Home</a>
                    <a href="login" className="nav-link">Login</a>
                    <a href="signup" className="nav-link">Sign Up</a>
                </div>
            </header>
            <div className="profile-container">
                <div className="profile-sidebar">
                    <div className="user-profile">
                        <div className="user-avatar">
                            <img src="https://static.vecteezy.com/system/resources/previews/022/450/297/non_2x/3d-minimal-purple-user-profile-avatar-icon-in-circle-white-frame-design-vector.jpg"/>
                        </div>
                        <h2 className="username">
                            {userData.firstName} {userData.lastName}
                        </h2>
                        <p className="useremail">{userData.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}