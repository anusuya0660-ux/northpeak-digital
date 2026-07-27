import "../styles/Service.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaPaintBrush,
} from "react-icons/fa";

const service = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    text: "Responsive websites built with modern technologies for speed and performance.",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    text: "Cross-platform mobile applications with seamless user experiences.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    text: "Marketing campaigns that increase traffic, leads, and conversions.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    text: "Improve your search rankings with technical and on-page SEO strategies.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Analytics",
    text: "Use data insights to make smarter business decisions and drive growth.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    text: "Modern, user-friendly interfaces that deliver exceptional digital experiences.",
  },
];

function Service() {
  return (
    <section className="services" id="services">
      <div className="container">
        <span className="section-tag">Our Services</span>
        <center>
          <h2 className="section-title">
            Solutions That Help Your Business Grow
          </h2>

          <p className="section-description">
            From design to development and digital marketing, NorthPeak Digital
            provides complete digital solutions tailored to your business.
          </p>
        </center>
        <div className="services-grid">
          {service.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a >Learn More →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;