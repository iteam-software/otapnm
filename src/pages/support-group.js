import React from "react";
import { css } from "@emotion/core";
import { Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import Splash from "../components/Splash";

const supportGroup = ({ location }) => {
  return (
    <Layout
      url={location.href}
      pageTitle="Support Group"
      description="OTAP Support Group"
    >
      <Splash title="Support Group" />
      <Row
        css={css`
          background-color: #bed8ef;
          border-top: 1px solid #e7f1f9;
          border-bottom: 1px solid #95bfe5;
        `}
        className="py-5"
      >
        <Col sm={{ span: 8, offset: 2 }}>

          <h2 className="text-center">FOR INFORMATION PLEASE CONTACT EVELYN RIVERA <a href="tel:1-505-299-5955">505-299-5955</a></h2>
          
        </Col>
      </Row>
    </Layout>
  );
};

export default supportGroup;
