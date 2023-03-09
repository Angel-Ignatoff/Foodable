import emailjs from "@emailjs/browser";
import React from "react";
import "./cssFiles/Contact.css";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        // "youtube_template",
        e.target
        // "user_JABO21I8Gm6sxByJH17Nu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <a href="#" className="icon-decoration">
              <i className="fas fa-map-marker-alt" />
              <div className="topic">Address</div>
            </a>
            <div className="text-one" />
            <div className="text-two" />
          </div>
          <div className="phone details">
            <a href="#" className="icon-decoration">
              <i className="fas fa-phone-alt" />
              <div className="topic">Phone</div>
            </a>
            <div className="text-one" />
            <div className="text-two" />
          </div>
          <div className="email details">
            <a href="#" className="icon-decoration">
              <i className="fas fa-envelope" />
              <div className="topic">Email</div>
            </a>
            <div className="text-one" />
            <div className="text-two" />
          </div>
        </div>
        <div className="right-side">
          <div id="google-map" className="contact-container-address">
            <h3 className="contact-container-address-title">Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.9684296418477!2d-0.4749379840977684!3d51.53213887963921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766e0a6fcc751f%3A0x43eae5c365df7a7a!2sBrunel%20University%20London!5e0!3m2!1sen!2suk!4v1638116851439!5m2!1sen!2suk"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              width={400}
              height={300}
            />
          </div>
          <br></br>
          <div id="number-details" className="contact-container-number">
            <h2 className="contact-container-number-title">Get in touch</h2>
            <article className="contact-container-number-subtitle">
              <p className="contact-container-number-subtitle-text">
                You can call us at
              </p>
              <p className="contact-container-number-subtitle-digit">
                +44 7911 123456
              </p>
            </article>
            <p className="contact-container-number-content">
              If you have any questions, do not hesitate and call us at the
              phone number shown above, or you can email us at
              "foodable7@gmail.com". Our team will be more than happy to provide
              you with the help you need.
            </p>
          </div>
          <br></br>
          <div id="message-form" className="contact-container-send-message">
            <div className="topic-text">Send us a message</div>
            <p className="topic-text-p">
              Any queries about the Foodify Website
            </p>
            <form onSubmit={sendEmail}>
              <div className="input-box">
                <input type="text" placeholder="Your name" required="" />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="What's your email?"
                  required=""
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  required=""
                  placeholder="Your questions..."
                  defaultValue={""}
                />
              </div>
              <div className="button">
                <input type="submit" defaultValue="Send a Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
