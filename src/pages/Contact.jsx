import styled from "styled-components";
import PageTitle from "../components/PageTitle";
// import SocialMediaBar from "../components/SocialMediaBar";

function ContactPage() {
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
            {/* <h2 className="common-heading">Feel Free to Contact us</h2> */}
            <div className="contact-form">
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


  /* <iframe
      title="Kalamba"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1634.9190614809743!2d74.20781155849393!3d16.663040129842575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0555a8238e943%3A0xeb5941aaada71dc5!2sMahadev%20Temple!5e1!3m2!1sen!2sin!4v1666966686729!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe> */
