"use client"

import Link from "next/link"
import { use, useState } from "react"

export default function Home(){
  return(
    <div className="app-container">
      <header className="app-header">
        <h1 className="logo">Finsta</h1>
        <div className="main-navigation">
          <a href="login" className="nav-link">Login</a>
          <a href="signup" className="nav-link">Sign Up</a>
          <a href="profile" className="nav-button">My Profile</a>
          
        </div>
      </header>
      <div className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Smart Financial Decisions Start Here</h2>
          <p className="hero-subtitle">Calculate your loan payments with precision and plan your financial future with confidence.</p>
        </div>
      </div>
      <main className="main-content">
        <section className="calculator-section">
          <div className="section-header">
            <h2 className="section-title">Loan Calculator</h2>
            <p className="section-subtitle">Get accurate monthly payment estimates for your loans</p>
          </div>
            <div className="calculator-wrapper">
              <Calculator />
            </div>
        </section>
        <section className="feature-section">
          <div className="feature-card">
            <h3 className="feature-title">Personal Loans</h3>
            <p className="feature-description">Calculate payments for personal expenses, debt consolidation, and more.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Mortgages</h3>
            <p className="feature-description">Plan your home purchase with accurate monthly payment estimates.</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Auto Loans</h3>
            <p className="feature-description">Figure out what car fits your budget with our auto loan calculator.</p>
          </div>
        </section>
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2 className="logo">Finsta</h2>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Resources</h3>
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Guides</a>
              <a href="#" className="footer-link">FAQ</a>
            </div>
            <div className="footer-column">
              <h3 className="footer-heading">Legal</h3>
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
              <a href="#" className="footer-link">Security</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Finsta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}



function Calculator(){

  const[loantype, setLoantype] = useState("personal")
  const[principal, setPrincipal] = useState(100000)
  const[interestRate, setInterestRate] = useState(5)
  const[loanTerm, setLoanTerm] = useState(36)


  return(
    <div className="calculator">
      <div className="calculator-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="loan-type" className="form-label">Loan Type</label>
            <div className="select-wrapper">
              <select id="loan-type" className="form-select" value={loantype} onChange={(e)=> setLoantype(e.target.value)}>
                <option value="personal">Personal loan</option>
                <option value="mortgage">Mortgage</option>
                <option value="auto">Auto loan</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="principal" className="form-label">Loan Amount</label>
            <div className="input-wrapper">
              <span className="input-prefix">₹</span>
              <input id="principal" type="number" value={principal} onChange={(e)=> setPrincipal(e.target.value)} className="form-input"/>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="slider-header">
            <label htmlFor="interest-rate" className="form-label">Interest Rate</label>
            <span className="slider-value">{interestRate}%</span>
          </div>
          <input id="interest-rate" className="form-range" type="range" min="0.1" max="20" step="0.1" value={interestRate} onChange={(e)=>setInterestRate(e.target.value)}/>
          <div className="range-labels">
            <span>0.1%</span>
            <span>20%</span>
          </div>
        </div>
        <div className="form-group">
          <div className="slider-header">
            <label htmlFor="loan-term" className="form-label">Loan Term</label>
            <span className="slider-value">{loanTerm} months</span>
          </div>
          <input id="loan-term" type="range" min="12" max="360" step="12" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} className="form-range"/>
          <div className="range-labels">
            <span>12 mo</span>
            <span>360 mo</span>
          </div>
        </div>
        <button className="calculate-button">
          Calculate Payment
        </button>
      </div>
    </div>
  )
}



// import { useSession, signIn, signOut } from "next-auth/react"

// export default function Component() {
//   const { data: session } = useSession()
//   if(session) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }
//   return <>
//     Not signed in <br/>
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// }