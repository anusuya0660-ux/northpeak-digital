import React from 'react'
import "../styles/Pricing.css";
import { FaCheck } from "react-icons/fa";
const plans = [
  {
    title: "Starter",
    price: "$199",
    popular: false,
    features: [
      "1 Responsive Website",
      "Basic SEO",
      "3 Pages",
      "Email Support",
      "Free Consultation",
    ],
  },
  {
    title: "Professional",
    price: "$499",
    popular: true,
    features: [
      "10 Responsive Pages",
      "Advanced SEO",
      "Performance Optimization",
      "Priority Support",
      "Google Analytics",
    ],
  },
  {
    title: "Enterprise",
    price: "$999",
    popular: false,
    features: [
      "Unlimited Pages",
      "Custom Web Application",
      "Premium SEO",
      "24/7 Support",
      "Dedicated Project Manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">

        <div className="pricing-header">
          <span className="section-badge">PRICING</span>

          <h2>Flexible Plans For Every Business</h2>

          <p>
            Choose the perfect package that fits your business needs.
          </p>
        </div>

        <div className="pricing-grid">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={plan.popular ? "price-card popular" : "price-card"}
            >

              {plan.popular && (
                <div className="popular-tag">
                  Most Popular
                </div>
              )}

              <h3>{plan.title}</h3>

              <h1>{plan.price}</h1>

              <span>One Time Payment</span>

              <ul>

                {plan.features.map((item, i) => (

                  <li key={i}>
                    <FaCheck />
                    {item}
                  </li>

                ))}

              </ul>

              <a className="price-btn">
                Choose Plan
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}
