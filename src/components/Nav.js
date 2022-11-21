import React, { useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { css } from "@emotion/core";
import classNames from "classnames";
import NavLink from "../components/NavLink";
import { useStaticQuery, graphql } from "gatsby"

const Nav = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "newsletter"}}) {
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
`)

let newsletter;
if (data.allFile.nodes.length) {
  newsletter = data?.allFile?.nodes[0]?.childMarkdownRemark?.frontmatter?.pdf?.publicURL;
}


  const [navIsTransparent, setNavIsTransparent] = useState(true);

  let navClass = classNames({
    isOpaque: !navIsTransparent,
  });

  useEffect(() => {
    const changeNavBackground = () => {
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      if (window.pageYOffset > 0 || screenWidth < 1400) {
        setNavIsTransparent(false);
      } else {
        setNavIsTransparent(true);
      }
    };
    changeNavBackground();
    window.addEventListener("scroll", changeNavBackground);
    window.addEventListener("resize", changeNavBackground);
    return () => {
      window.removeEventListener("scroll", changeNavBackground);
      window.removeEventListener("resize", changeNavBackground);
    };
  }, []);
  return (
    <div
      className={`${navClass} navbar navbar-expand-lg d-flex justify-content-around fixed-top pt-3`}
      css={css`
        transition: background-color 0.5s ease-in-out;
      `}
    >
      {pageTitle !== "Home" && <NavLink url="/">Home</NavLink>}

      <NavLink url="/who-we-are">Who We Are</NavLink>
      <NavLink url="/support-group">Support Group</NavLink>
      <NavLink url="/our-stories">Our Stories</NavLink>
      <NavLink url={newsletter}>
        <FaRegFilePdf className="text-danger" />
        &nbsp;
        Newsletter
      </NavLink>
      <NavLink url="/assets/2023membershipform.pdf">
        <FaRegFilePdf className="text-danger" />
        &nbsp;
        Membership
      </NavLink>
      <NavLink url="/transplant-info">Transplant Info</NavLink>
      <NavLink url="/scholarship">Scholarship</NavLink>
    </div>
  );
};

export default Nav;
