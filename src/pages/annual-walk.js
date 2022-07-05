import React from "react";
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import PaperSection from "../shared/PaperSection";
import PaperDiv from "../shared/PaperDiv";

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "sponsor"}}) {
        edges {
          node {
            id
            name
            childMarkdownRemark {
              frontmatter {
                name
                image {
                  childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
                }
                image_alt_text
                address {
                  address
                  city
                  state
                  zip
                }
              }
            }
          }
        }
      }
    }
  `)
  // Sponsor Info
  const { name, address, image_alt_text, image } = data.allFile.edges[0].node.childMarkdownRemark.frontmatter;
  console.log(image.childImageSharp.fixed)
  return (
    <Layout
      url={location.href}
      pageTitle="Annual Walk"
      description="OTAP Annual Walk"
    >
      <Splash title="Annual Walk" />
      <PaperSection>
        <PaperDiv className="container text-center text-line-spacing-lg">
          <img
            src="/assets/otapnm.png"
            alt="OTAPNM Logo"
            css={css`
              height: 150px;
            `}
          />
          <h1
            css={css`
              color: #0c5253;
            `}
          >
            <strong>
              9<sup>th</sup> OTAP Transplant Awareness Trek
            </strong>
          </h1>
          <h2>
            <strong>
              Sunday, April 4<sup>th</sup>, 2021
            </strong>
          </h2>
          <h2>
            <strong>Vista Del Norte Park</strong>
          </h2>
          <h4>1005 Osuna Rd NE, Abq, 87113</h4>
          <h4>NEC Vista Del Norte NE and Osuna Rd NE</h4>
          <h2>
            Check in <strong>@ 8:15 am</strong>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Walk
            Begins <strong>@ 9:00 am</strong>
          </h2>
          <h4>Sponsored by Organ Transplant Awareness Program of New Mexico</h4>
          <div className="my-5">
            <h2>
              Honor Organ Donors, Celebrating Organ Recipients and Acknowledging
              Patients Awaiting Transplant.
            </h2>
          </div>
          <h1>Register Today</h1>
          <h2>$10.00 per walker</h2>
          <br />
          <p>
            Contact Feliz Munoz
            <br />
            <a href="tel:+15059100611">505-910-0611</a>
            <br />
            Please contact for sponsorship requests and information
          </p>
        </PaperDiv>
      </PaperSection>
      <PaperSection className="text-center">
        <h1>2020 Organ Donation Awareness Walk Local Sponsors</h1>
        <PaperDiv
          className="mx-auto mt-5"
          css={css`
            background-color: rgba(255, 255, 255, 0.65);
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
              0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
            flex-flow: column nowrap;
            margin: 8px;
            max-width: 100%;
            padding: 20px;
            width: 300px;
          `}
        >
          <h2>{name}</h2>
          <Img
          className="my-5"
          fluid={image.childImageSharp.fluid}
        />
          <div className="text-center">
            Located at
            <br />
            <a
              href="https://goo.gl/maps/smHcKA5vZ5x2JBib9"
              target="_blank"
              rel="noopener noreferrer"
            >
              {address.address}
              <br />
              {address.city}, {address.state} 
            </a>
          </div>
        </PaperDiv>
      </PaperSection>
    </Layout>
  );
};

