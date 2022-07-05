import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import OrganSharingChart from "../components/OrganSharingChart";
import TransplantResources from "../components/TransplantResources";
import Books from "../components/Books";
import RxDrugAssistance from "../components/RxDrugAssistance";
import ContentHeader from "../shared/ContentHeader";
import PaperDiv from "../shared/PaperDiv";
import PaperSection from "../shared/PaperSection";
import VideoWrapper from "../shared/VideoWrapper";

const transplantInfo = ({ location }) => {
  return (
    <Layout
      url={location.href}
      pageTitle="Transplant Info"
      description="OTAP Transplant Information"
    >
      <Splash title="Transplant Info" />
      <PaperSection>
        <PaperDiv className="container-sm">
          <ContentHeader>How Does It Work?</ContentHeader>
          <VideoWrapper>
            <iframe
              title="evelyn news story"
              src="https://www.youtube.com/embed/K4bS7YZjqhY"
            ></iframe>
          </VideoWrapper>
        </PaperDiv>
      </PaperSection>
      <OrganSharingChart />
      <TransplantResources ContentHeader={ContentHeader} />
      <Books ContentHeader={ContentHeader} />
      <RxDrugAssistance ContentHeader={ContentHeader} />
    </Layout>
  );
};

export default transplantInfo;
