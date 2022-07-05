import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "@emotion/core";
import { FaRegFilePdf } from "react-icons/fa";
import { Card } from "react-bootstrap";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import PaperDiv from "../shared/PaperDiv";
import PaperSection from "../shared/PaperSection";

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query scholarshipsQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "scholarships" } }
        sort: {
          fields: childMarkdownRemark___frontmatter___year_received
          order: DESC
        }
      ) {
        nodes {
          name
          childMarkdownRemark {
            id
            frontmatter {
              recipient
              year_received
              essay {
                publicURL
              }
              thumbnail {
                publicURL
              }
            }
          }
        }
      }
      application: allFile(
        filter: { sourceInstanceName: { eq: "scholarship_application" } }
      ) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              pdf {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  let applicationPDF;
  if (data.application.nodes.length) {
    applicationPDF =
      data?.application?.nodes[0]?.childMarkdownRemark?.frontmatter?.pdf
        ?.publicURL;
  }

  const recipients = data.allFile.nodes;

  recipients.sort((a, b) => b.year_received - a.year_received);

  const baseUrl = location.origin;
  const scholarships = recipients.map(el => {
    const {
      recipient,
      year_received,
      essay,
      thumbnail,
    } = el.childMarkdownRemark.frontmatter;
    return (
      <Card
        css={css`
          background-color: rgba(255, 255, 255, 0.65);
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
          margin: 8px;
          max-width: 100%;
          transition: all ease-in-out 0.3s;
          width: 250px;
        `}
        key={el.id}
      >
        <a
          href={`${baseUrl}${essay.publicURL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            css={css`
              background-image: url(${thumbnail.publicURL});
              display: flex;
              justify-content: center;
              align-items: center;
              background-position: center top;
              background-size: cover;
              transition: all ease-in-out 0.7s;
              height: 250px;
              padding-top: 115px;
              &:before {
                content: "";
              }
              &:hover {
                background: grey;
                opacity: 0.5;
                display: inline-block;
                width: 100%;
                text-align: center;
                &:after {
                  content: "Click to Download";
                  color: white;
                  font-weight: 500;
                }
              }
            `}
          />
        </a>
        <Card.Body>
          <p className="text-uppercase text-nowrap text-center">
            {year_received} {recipient}
          </p>
        </Card.Body>
      </Card>
    );
  });
  return (
    <Layout
      url={location.href}
      pageTitle="Scholarship"
      description="OTAP Scholarship information"
    >
      <Splash title="Scholarship" />
      <PaperSection className="text-center">
        <PaperDiv className="container-sm">
          <h4>Organ Donation Scholarship</h4>
          <h4>Opportunity for High School Seniors</h4>
          <br />
          <div className="text-line-spacing-md">
            <p>
              Applications will begin to be accepted on{" "}
              <strong>
                <em>
                  December 1<sup>st</sup>, 2022
                </em>
              </strong>{" "}
              and the deadline to apply will be{" "}
              <strong>
                <em>
                  February 14<sup>th</sup>, 2023
                </em>
              </strong>
              .
            </p>
          </div>
        </PaperDiv>
      </PaperSection>
      <PaperSection>
        <div className="container-md d-flex flex-row flex-wrap align-items-stretch justify-content-center">
          {scholarships}
        </div>
      </PaperSection>
    </Layout>
  );
};
