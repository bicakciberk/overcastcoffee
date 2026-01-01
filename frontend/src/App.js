import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">Overcast Coffee</div>
          <div className="nav-links">
            <button onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className={activeSection === 'about' ? 'active' : ''}>
              About
            </button>
            <button onClick={() => scrollToSection('locations')} className={activeSection === 'locations' ? 'active' : ''}>
              Visit Us
            </button>
            <button onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title" data-testid="hero-title">Overcast Coffee Company</h1>
          <div className="hero-divider"></div>
          <p className="hero-subtitle" data-testid="hero-subtitle">Seattle Based, Locally Sourced, Quality Coffee</p>
          <button onClick={() => scrollToSection('locations')} className="hero-cta" data-testid="visit-us-btn">
            Visit Us
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" data-testid="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2 className="section-title" data-testid="about-title">Our Story</h2>
            <div className="section-divider"></div>
            <div className="about-text">
              <p data-testid="about-text-1">
                At Overcast Coffee Company, we strive to bring delicious, seasonal coffee to our customers 
                while also supporting the local community. Our coffee is sourced from farmers all over the world 
                who are committed to sustainable and ethical practices.
              </p>
              <p data-testid="about-text-2">
                We are also deeply committed to growing our community – through supporting local businesses, 
                giving back to those in need, and providing educational opportunities to our customers.
              </p>
              <p data-testid="about-text-3">
                We believe that when we come together, we can create something special. Come join us and 
                experience what it means to love your community.
              </p>
            </div>
          </div>
          <div className="about-images">
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1760351065294-b069f6bcadc4?w=800&q=80" 
                alt="Community enjoying coffee together" 
                className="about-image"
                data-testid="about-image-1"
              />
            </div>
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1669162364316-a74b2d661d1e?w=800&q=80" 
                alt="Beautiful latte art" 
                className="about-image"
                data-testid="about-image-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="locations" data-testid="locations-section">
        <div className="locations-container">
          <h2 className="section-title" data-testid="locations-title">Visit Us</h2>
          <div className="section-divider"></div>
          
          <div className="locations-grid">
            {/* Location 1 */}
            <div className="location-card" data-testid="location-card-1">
              <div className="location-header">
                <h3 className="location-name" data-testid="location-1-name">15th Avenue</h3>
                <p className="location-note" data-testid="location-1-note">Indoor and outdoor seating available</p>
              </div>
              <div className="location-details">
                <div className="location-info">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="location-address" data-testid="location-1-address">312 15th Ave E</p>
                    <p className="location-city" data-testid="location-1-city">Seattle, WA 98112</p>
                  </div>
                </div>
                <div className="location-info">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="location-hours" data-testid="location-1-hours">
                    <p>Monday - Friday: 6:30am - 3:00pm</p>
                    <p>Saturday: 9:00am - 3:00pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
                <div className="location-info">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:206-322-2220" className="location-phone" data-testid="location-1-phone">(206) 322-2220</a>
                </div>
              </div>
              <div className="map-container">
                <iframe
                  title="Overcast Coffee 15th Avenue Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.8!2d-122.3125!3d47.6205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM3JzEzLjgiTiAxMjLCsDE4JzQ1LjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  data-testid="location-1-map"
                ></iframe>
              </div>
            </div>

            {/* Location 2 */}
            <div className="location-card" data-testid="location-card-2">
              <div className="location-header">
                <h3 className="location-name" data-testid="location-2-name">12th Avenue</h3>
                <p className="location-note" data-testid="location-2-note">Patio seating available • By Kaiser Permanente</p>
              </div>
              <div className="location-details">
                <div className="location-info">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="location-address" data-testid="location-2-address">1517 12th Ave, Suite 100</p>
                    <p className="location-city" data-testid="location-2-city">Seattle, WA 98122</p>
                  </div>
                </div>
                <div className="location-info">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="location-hours" data-testid="location-2-hours">
                    <p>Monday - Friday: 7:00am - 6:00pm</p>
                    <p>Saturday - Sunday: 8:00am - 5:00pm</p>
                  </div>
                </div>
                <div className="location-info">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:206-588-2621" className="location-phone" data-testid="location-2-phone">(206) 588-2621</a>
                </div>
              </div>
              <div className="map-container">
                <iframe
                  title="Overcast Coffee 12th Avenue Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.2!2d-122.3165!3d47.6145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM2JzUyLjIiTiAxMjLCsDE4JzU5LjQiVw!5e0!3m2!1sen!2sus!4v1234567891"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  data-testid="location-2-map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" data-testid="contact-section">
        <div className="contact-container">
          <h2 className="section-title" data-testid="contact-title">Get In Touch</h2>
          <div className="section-divider"></div>
          
          <div className="contact-content">
            <div className="contact-image">
              <img 
                src="https://images.unsplash.com/photo-1726763580111-8bb05287de6b?w=800&q=80" 
                alt="Cozy coffee atmosphere" 
                data-testid="contact-image"
              />
            </div>
            
            <div className="contact-info">
              <div className="contact-item" data-testid="contact-email-item">
                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="contact-label">Email</h3>
                  <a href="mailto:info@overcastcoffee.co" className="contact-link" data-testid="contact-email">
                    info@overcastcoffee.co
                  </a>
                </div>
              </div>

              <div className="contact-item" data-testid="contact-phones-item">
                <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="contact-label">Phone</h3>
                  <a href="tel:206-322-2220" className="contact-link" data-testid="contact-phone-1">15th Ave: (206) 322-2220</a>
                  <a href="tel:206-588-2621" className="contact-link" data-testid="contact-phone-2">12th Ave: (206) 588-2621</a>
                </div>
              </div>

              <div className="contact-item" data-testid="contact-instagram-item">
                <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <div>
                  <h3 className="contact-label">Instagram</h3>
                  <a 
                    href="https://instagram.com/overcastcoffeecompany" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link"
                    data-testid="contact-instagram"
                  >
                    @overcastcoffeecompany
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <div className="footer-container">
          <p className="footer-text" data-testid="footer-text">
            © 2025 Overcast Coffee Company. Seattle, WA.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;