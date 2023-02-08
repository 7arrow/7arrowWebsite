import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../components/PageTitle";
// import SocialMediaBar from "../components/SocialMediaBar";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.message) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const subject = `Contact us form submission from ${formData.name}`;
      const body = `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `;
      window.open(`mailto:7arrow.in@gmail.com?subject=${subject}&body=${body}`);
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }
  };

  return (
    <div>
      <PageTitle title="Feel Free To Contact Us" />
      <Wrapper>
        <div className="grid grid-two-column">
          <div>
            <iframe
              title="7arrow.in"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.274013429556!2d74.20702151434399!3d16.66316602767386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc05581fc661fbf%3A0xff153c5a6f80bd51!2s7Arrow.in!5e0!3m2!1sen!2sin!4v1675147255232!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="container">
            
            <div className="contact-form">
              <form onSubmit={handleSubmit} className="contact-inputs" id="contactForm">
                <div>
                  {/* <label htmlFor="name">Name:</label> */}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ fontSize: 14, width: "100%" }}
                  />
                  {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>
                <div>
                  {/* <label htmlFor="email">Email:</label> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ fontSize: 14, width: "100%" }}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </div>
                <div>
                  {/* <label htmlFor="message">Message:</label> */}
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ fontSize: 14, width: "100%" }}
                  />
                  {errors.message && (
                    <p style={{ color: "red" }}>{errors.message}</p>
                  )}
                </div>
                {/* <button type="submit">Send</button> */}
                <input type="submit" style={{ alignSelf: "center" }} />
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  padding: 5rem 8rem 5rem 12rem;

  .container {
    margin-top: 0rem;
    text-align: center;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default ContactPage;

{/* <h2 className="common-heading">Feel Free to Contact us</h2> */}
            {/* <div className="contact-form">
              <form
                action="https://formspree.io/f/mdojwyzb"
                method="POST"
                className="contact-inputs"
              >
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  autoCapitalize="off"
                  required
                />
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="6"
                  autoComplete="off"
                  required
                ></textarea>
                <input type="submit" value="send" />
              </form>
            </div> */}
