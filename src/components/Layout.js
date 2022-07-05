import React from "react";
import { Global, css } from "@emotion/core";
import Nav from "./Nav";
import Footer from "./Footer";
import SEO from "./SEO";

export default function Layout({ pageTitle, url, description, children }) {
  return (
    <>
      <SEO
        pageTitle={pageTitle}
        canonical_url={url}
        description={description}
      />
      <Nav pageTitle={pageTitle} />
      <div className="container-fluid p-0 m-0">{children}</div>
      <Footer />
      <Global
        styles={css`
          @media (min-width: 1564px) {
            .container {
              max-width: 1500px;
            }
          }
          .isOpaque {
            background-color: #0c5253;
            border-bottom: 1px solid rgba(119, 119, 119, 0.7);
            .nav-link {
              color: white;
            }
          }
          body {
            font-family: var(--font-family);
          }
          :root {
            @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
            // Website font
            --font-family: "Open Sans", sans-serif;
          }
        `}
      ></Global>
    </>
  );
}
