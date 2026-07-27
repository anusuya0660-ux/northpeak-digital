import React from 'react'
import "../styles/Results.css";
import { FaStar } from "react-icons/fa";
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Bright Solutions",
    review:
      "NorthPeak Digital completely transformed our online presence. Our website traffic doubled within three months.",
  },
  {
    name: "David Miller",
    company: "NextGen Tech",
    review:
      "Professional team, excellent communication, and outstanding results. Highly recommended for any business.",
  },
  {
    name: "Emily Carter",
    company: "Vision Studio",
    review:
      "The new website exceeded our expectations. The design is modern, fast, and our customers love it.",
  },
];

function Results() {

  return (
    <section className="results" id="results">
      <div className="container">

        <div className="results-top">

          <div className="results-text">
            <span className="section-badge">OUR RESULTS</span>

            <h2>Helping Businesses Grow Faster</h2>

            <p>
              We deliver measurable results through creative design,
              development, and digital marketing solutions.
            </p>
          </div>

          <div className="results-stats">

            <div className="stat-card">
              <h3>120+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="stat-card">
              <h3>95%</h3>
              <p>Client Satisfaction</p>
            </div>

            <div className="stat-card">
              <h3>8+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h3>60+</h3>
              <p>Happy Clients</p>
            </div>

          </div>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>"{item.review}"</p>

              <h4>{item.name}</h4>

              <span>{item.company}</span>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}

export default Results