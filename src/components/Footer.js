import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Row, Col } from "react-bootstrap";
const SocialButton = styled.a`
background-color: #fefefe;
color: #0C5253;
&:hover {
  color: #fefefe;
  background-color: #0C5253;
  border: 1px solid black;

`;
const Footer = () => {
  return (
    <footer
      className="py-5"
      css={css`
        background-color: silver;
        border-top: 1px solid #dadada;
        color: #0c5253;
        width: 100%;
      `}
    >
    <div className="container">
      <Row>
        <Col sm={12} md={4} className="d-inline-block text-center pb-4">
            <img
              alt="OTAP Logo"
              src="/assets/otapnm.png"
              css={css`
                height: 150px;
              `}
            />
            <div>
              <div>
                Organ Transplant Awareness
                <br />
                Program of New Mexico
              </div>
              <div className="text-danger">
                P.O. Box 37217
                <br />
                Albuquerque, NM 87176
                <br />
                <a href="mailto:organdonation@otapnm.com">
                  organdonation@otapnm.com
                </a>
              </div>
            </div>
          
        </Col>
        <Col sm={12} md={4} className="text-center pb-4">
          <a href="https://www.guidestar.org/profile/04-3654972">
            <img
              alt="Seal Of Transparency"
              src="/assets/platinum-seal-of-transparency.png"
              css={css`
                height: 135px;
              `}
            />
          </a>
        </Col>
        <Col sm={12} md={4} className="text-center pb-4">
          <div className="text-center py-2">
            <div>STAY CONNECTED</div>
            <div>
              <SocialButton
                target="_blank"
                rel="noopener noreferrer"
                className="btn social-link mx-2"
                href="https://www.facebook.com/otapnm/"
              >
                <FaFacebookF />
              </SocialButton>
              <SocialButton
                target="_blank"
                rel="noopener noreferrer"
                className="btn social-link mx-2"
                href="https://twitter.com/OTAP_NM"
              >
                <FaTwitter />
              </SocialButton>
            </div>
          </div>

          <div className="donate-paypal text-center py-2">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="MF2E28VB43QAG"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                alt="Pay Pal Gif"
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>

          <div className="amazon-smile">
            <a
              href="http://smile.amazon.com/ch/04-3654972"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/amazon-smile.jpg"
                alt="Amazon Smile"
                width="150"
              />
            </a>
          </div>
        </Col>
      </Row>
      <div className="text-center">
        <small>
          Designed and Developed by&nbsp;
          <a
            href="https://iteamnm.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            iTEAM Consulting
          </a>
          .
        </small>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
