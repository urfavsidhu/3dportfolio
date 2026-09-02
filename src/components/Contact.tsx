import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:bcasidharth@gmail.com" data-cursor="disable">
                bcasidharth@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917880992379" data-cursor="disable">
                +91 78809 92379
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/urfavsidhu"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sidharth-sharma-043257433"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/Sidhart46362858"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://instagram.com/urfav_sidhuu"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sidharth Sharma</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
            <p style={{ fontSize: "0.7rem", opacity: 0.6, marginTop: "6px" }}>
              Template by{" "}
              <a
                href="https://www.moncy.dev"
                target="_blank"
                data-cursor="disable"
              >
                Moncy Yohannan
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
