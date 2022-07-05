import React from "react";
import { Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import PaperSection from "../shared/PaperSection";
import PaperDiv from "../shared/PaperDiv";

const calendar = ({ location }) => {
  return (
    <div>
      <Layout
        url={location.href}
        pageTitle="Calendar"
        description="OTAP Calendar"
      >
        <Splash title="Calendar" />
        <PaperSection>
          <Row>
            <PaperDiv className="container-sm">
              <h1>Calendar</h1>
              <iframe
                title="OTAP Event Calendar"
                src="https://calendar.google.com/calendar/embed?amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=otapnmorg%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FDenver"
                style={{ borderWidth: "0" }}
                width="100%"
                height="600"
                scrolling="no"
                className="calendar"
              ></iframe>
            </PaperDiv>
          </Row>
        </PaperSection>
      </Layout>
    </div>
  );
};

export default calendar;
