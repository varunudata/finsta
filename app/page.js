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
            {/* <div className="calculator-wrapper">
              <Calculator />
            </div> */}
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
