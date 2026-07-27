import "../styles/Hero.css";
import img from "../assets/home.jpeg";
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            🚀 Trusted by 120+ Businesses
          </span>

          <h1>
            Grow Your Business With
            <span> NorthPeak Digital</span>
          </h1>
<h2>
          <p>
            We help startups and businesses increase their online presence
            through modern web development, SEO, branding and digital
            marketing strategies.
          </p>
</h2>
          <div className="hero-buttons">

            <a className="btn-primary">
              Get Started
            </a>

            <a href="#services" className="btn-secondary">
              Explore Services
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <h2>120+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>95%</h2>
              <span>Client Satisfaction</span>
            </div>

            <div>
              <h2>8+</h2>
              <span>Years Experience</span>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="circle one"></div>
          <div className="circle two"></div>

         <img
src={img}
alt="NorthPeak Digital"
loading="lazy"
width="500"
height="350"
/>

        </div>

      </div>

    </section>
  );
}

export default Hero;