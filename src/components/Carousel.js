import React from "react";
import { css } from "@emotion/core";
import Img from "gatsby-image";
import { Carousel as BSCarousel } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

const Carousel = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "carousel" } }) {
        nodes {
          childMarkdownRemark {
            frontmatter {
              alt_text
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const images = data.allFile.nodes.map(el => {
    const { alt_text } = el.childMarkdownRemark.frontmatter.alt_text;
    const { fluid } = el.childMarkdownRemark.frontmatter.image.childImageSharp;
    return (
      <BSCarousel.Item key={el.id}>
        <Img
          css={css`
            max-width: 720px;
            height: 480px;
            margin: auto;
            img {
              object-fit: contain !important;
            }
          `}
          fluid={fluid}
          alt={alt_text}
        />
      </BSCarousel.Item>
    );
  });
  return (
    <BSCarousel
      css={css`
        .carousel-control-prev-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%233487CD' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
          width: 30px;
          height: 48px;
        }
        .carousel-control-next-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%233487CD' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
          width: 30px;
          height: 48px;
        }
      `}
      controls={true}
      indicators={false}
      touch={true}
    >
      {images}
    </BSCarousel>
  );
};
export default Carousel;
