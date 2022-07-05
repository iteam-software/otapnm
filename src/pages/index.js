import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { FaHeart } from "react-icons/fa";
import Carousel from "../components/Carousel";
import Layout from "../components/Layout";
import ContentHeader from "../shared/ContentHeader";
import PaperDiv from "../shared/PaperDiv";
import PaperSection from "../shared/PaperSection";
const ContactInfo = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
  }
`;

export default ({ location }) => {
  return (
    <Layout url={location.href} pageTitle="Home" description="OTAP Home Page">
      <div
        className="pt-5"
        css={css`
          background: url("/assets/blue-sky.jpg") no-repeat center fixed;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
          padding: 0 0 80px 0;
        `}
      >
        <div className="splash-content">
          <div className="text-center mt-5 pt-5">
            <a href="http://www.organdonor.gov" className="btn btn-light">
              <FaHeart size={28} className="text-danger pr-2" />
              Become an Organ Donor
            </a>
          </div>

          <div className="text-center pt-5">
            <img
              src="/assets/otapnm.png"
              alt="OTAPNM Logo"
              css={css`
                height: 350px;
                opacity: 0.75;
              `}
            />
          </div>
          <div
            className="text-center"
            css={css`
              font-size: 35.2px;
              font-style: italic;
              color: black;
            `}
          >
            Organ Transplant Awareness Program
          </div>
          <div
            className="text-center pb-5"
            css={css`
              text-shadow: rgba(0, 0, 0, 0.3) 2px 2px 4px;
              font-size: 20.8px;
              color: black;
            `}
          >
            <em>
              Promoting Organ Donor Awareness; Supporting organ &amp; tissue
              transplant, candidates, recipients, organ donors and their
              families.
            </em>
          </div>
        </div>
        <div
          css={css`
            background-color: rgba(255, 255, 255, 0.6);
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            margin-bottom: 125px;
          `}
        >
          <div className="text-center py-5">
            <h2 className="mb-3">Board of Directors</h2>
            <div className="d-flex flex-row flex-wrap justify-content-around mx-5">
              <div className="py-2">
                <h5>Evelyn J Rivera</h5>
                <h6>Member-At-Large</h6>
                <div className="text-black">
                  <ContactInfo href="tel:505-299-5955">
                    505-299-5955
                  </ContactInfo>
                </div>
                <div>
                  <ContactInfo href="mailto:rioreal@earthlink.net">
                    rioreal@earthlink.net
                  </ContactInfo>
                </div>
              </div>
              <div className="py-2">
                <h5>Venae Warner</h5>
                <h6>Support Group Facilitator</h6>
                <div className="text-black nav-link">
                  <ContactInfo href="tel:505-344-0452">
                    505-344-0452
                  </ContactInfo>
                </div>
              </div>
              <div className="py-2">
                <h5>Margaret Lopez</h5>
                <h6>Scholarship Chair</h6>
                <div>
                  <ContactInfo href="mailto:silverlopez@aol.com">
                    silverlopez@aol.com
                  </ContactInfo>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PaperSection
          className="pt-5"
        >
          <PaperDiv className="container">
            <ContentHeader className="pl-5">Photos</ContentHeader>
            <Carousel />
          </PaperDiv>
        </PaperSection>
      </div>
    </Layout>
  );
};
