import React from "react";
import Link from "gatsby-link";
import { css } from "@emotion/core";

const NavLinkStyle = css`
  font-size: 18px;
  white-space: nowrap;
  z-index: 1005;
  margin: 0;
  border-radius: 5px;
  color: black;
  white-space: nowrap;
  padding: 4px 8px;
  &:hover {
    transition: all ease-in-out 0.3s;
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media (max-width: 1100px) {
    font-size: 80%;
  }
`;
const NavLink = ({ children, url }) => {
  if (url.includes(".pdf")) {
    return (
      <a
        href={url}
        className="nav-link"
        css={NavLinkStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return (
      <div>
        <Link to={url} className="nav-link" css={NavLinkStyle}>
          {children}
        </Link>
      </div>
    );
  }
};

export default NavLink;
