import { useState, useEffect } from 'react'
import './App.css'
function App() {  
  const [showButton, setShowButton] = useState(false)
const [successMessage, setSuccessMessage] = useState('')
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
const handleSubmit = (event) => {
  event.preventDefault()

  setSuccessMessage('Thank you! Your message has been received.')

  event.target.reset()

  setTimeout(() => {
    setSuccessMessage('')
  }, 5000)
}
  return (
    <div className="website">

      {/* Header */}
      <header>
        <h1>Hirna City Administration</h1>
        <p>Official City Administration Website</p>
      </header>

      {/* Navigation */}
     <nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#departments">Departments</a>
  <a href="#projects">Projects</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
</nav>

      {/* Hero Section */}
      <section className="hero"id="home">
        <div className="hero-content">
          <h1>Welcome to Hirna</h1>

          <p>
            Discover our city, explore public services,
            and learn about development activities
            and opportunities in Hirna.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-primary">
              Explore Our City
            </a>

            <a href="#" className="btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Information Cards */}
<main>
  <div className="cards-container">

    <div className="info-card">
      <h2>About Hirna</h2>
      <p>
        Learn about Hirna, its history, administration,
        people, and development.
      </p>
      <a href="#">Learn More →</a>
    </div>

    <div className="info-card">
      <h2>Public Services</h2>
      <p>
        Explore public services and information
        provided by the city administration.
      </p>
      <a href="#">Explore Services →</a>
    </div>

    <div className="info-card">
      <h2>Development Projects</h2>
      <p>
        Discover ongoing and completed development
        activities across Hirna.
      </p>
      <a href="#">View Projects →</a>
    </div>

  </div>{/* News and Announcements */}
<section className="news-section" id="news">

  <div className="section-heading">
    <h2>News & Announcements</h2>
    <p>Stay informed about the latest updates from Hirna.</p>
  </div>

  <div className="news-container">

    <article className="news-card">
      <h3>Public Announcements</h3>
      <p>
        Important announcements and public information
        from the city administration.
      </p>
      <a href="#">Read More →</a>
    </article>

    <article className="news-card">
      <h3>Community Updates</h3>
      <p>
        Information about community activities and
        local administration updates.
      </p>
      <a href="#">Read More →</a>
    </article>

    <article className="news-card">
      <h3>Development Updates</h3>
      <p>
        Updates about development activities and
        projects in Hirna.
      </p>
      <a href="#">Read More →</a>
    </article>

  </div>

</section>{/* Departments Section */}
	<section className="departments-section" id="departments">

 <div className="section-heading">
    <h2>Our Departments</h2>
    <p>Explore the departments serving our community.</p>
  </div>

  <div className="departments-container">

    <div className="department-card">
      <h3>Urban Development</h3>
      <p>Planning and managing the city's urban development.</p>
    </div>

    <div className="department-card">
      <h3>Finance Department</h3>
      <p>Managing city finances, budgets, and public revenue.</p>
    </div>

    <div className="department-card">
      <h3>Land Administration</h3>
      <p>Providing land administration and related services.</p>
    </div>

    <div className="department-card">
      <h3>Public Service</h3>
      <p>Supporting citizens through public administration services.</p>
    </div>

  </div>

</section>{/* Development Projects Section */}
<section className="projects-section" id="projects">

  <div className="section-heading">
    <h2>Development Projects</h2>
    <p>Explore development activities improving our city.</p>
  </div>

  <div className="projects-container">

    <div className="project-card">
      <div className="project-image">🏗️</div>
      <h3>Road Development</h3>
      <p>Road infrastructure development to improve transportation.</p>
      <span className="project-status">Ongoing</span>
    </div>

    <div className="project-card">
      <div className="project-image">🏢</div>
      <h3>Public Infrastructure</h3>
      <p>Construction and improvement of public infrastructure.</p>
      <span className="project-status">Planned</span>
    </div>

    <div className="project-card">
      <div className="project-image">🌳</div>
      <h3>Urban Beautification</h3>
      <p>Improving public spaces and the city's environment.</p>
      <span className="project-status">Ongoing</span>
    </div>

  </div>

</section>{/* About Hirna Section */}
<section className="contact-section" id="contact">

  <div className="about-content">

    <div className="about-text">
      <h2>About Hirna</h2>

      <p>
        Hirna is a town with a rich community, cultural identity,
        and growing development opportunities. The city administration
        works to improve public services, infrastructure, and the
        living conditions of its residents.
      </p>

      <p>
        Through good governance, public participation, and sustainable
        development, Hirna continues to work toward a better future.
      </p>

      <a href="#" className="about-button">Discover More</a>
    </div>

    <div className="about-image">
      <img src="/images/hirna-city.jpg" alt="Hirna City" />
    </div>

  </div>

</section>{/* Contact Section */}
<section className="contact-section">

  <div className="section-heading">
    <h2>Contact Us</h2>
    <p>We are here to serve our community.</p>
  </div>

  <div className="contact-container">

    <div className="contact-info">
      <h3>Contact Information</h3>

      <p><strong>Location:</strong> Hirna, Oromia, Ethiopia</p>
      <p><strong>Email:</strong> info@hirna.gov.et</p>
      <p><strong>Phone:</strong> +251 000 000 000</p>
      <p><strong>Office:</strong> Hirna City Administration</p>
    </div>

    <div className="contact-form">
      <h3>Send Us a Message</h3>

     <form onSubmit={handleSubmit}>

  <label htmlFor="fullName">Full Name</label>
  <input
    type="text"
    id="fullName"
    name="fullName"
    placeholder="Enter your full name"
    required
  />

  <label htmlFor="email">Email Address</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your email"
    required
  />
<label htmlFor="phone">Phone Number (Optional)</label>
<input
  type="tel"
  id="phone"
  name="phone"
  placeholder="Enter your phone number"
/>
  <label htmlFor="subject">Subject</label>
  <input
    type="text"
    id="subject"
    name="subject"
    placeholder="Enter subject"
    required
  />

  <label htmlFor="message">Message</label>
  <textarea
    id="message"
    name="message"
    placeholder="Write your message..."
    rows="5"
    required
  ></textarea>

  <button type="submit">Send Message</button>

</form>
{successMessage && (
  <p className="success-message">{successMessage}</p>
)}
  </div>

  </div>

</section>
</main>

      {/* Footer */}
<footer className="footer">

  <div className="footer-container">

    <div className="footer-about">
      <h2>Hirna City Administration</h2>
      <p>
        Working together for a better, developed,
        and prosperous Hirna.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#">Home</a>
      <a href="#">About Hirna</a>
      <a href="#">Public Services</a>
      <a href="#">Departments</a>
      <a href="#">Contact</a>
    </div>

    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>Hirna, Oromia, Ethiopia</p>
      <p>Email: info@hirna.gov.et</p>
      <p>Phone: +251 000 000 000</p>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Hirna City Administration. All Rights Reserved.</p>
    <p>Designed for learning and development.</p>
  </div>

</footer>
    {/* Back to Top Button */}
{showButton && (
  <button
    className="back-to-top"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    ↑
  </button>
)}
    </div>
  )
}

export default App