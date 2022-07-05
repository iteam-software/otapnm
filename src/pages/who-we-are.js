import React from "react";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import ContentHeader from "../shared/ContentHeader";
import PaperSection from "../shared/PaperSection";
import PaperDiv from "../shared/PaperDiv";

const whoWeAre = ({ location }) => {
  return (
    <Layout
      url={location.href}
      pageTitle="Who We Are"
      description="OTAP Who We Are"
    >
      <Splash title="Who We Are" />
      <PaperSection>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>OTAP History</ContentHeader>
          <p>
            In 1990, upon the advice of an Albuquerque transplant surgeon, a
            group of heart and lung recipients formed their own support group.
            Then kidney recipients joined the group. After that liver recipients
            and pancreas/kidney recipients joined. When the United Network for
            Organ Sharing regionalized the transplant centers and closed down
            Albuquerque’s heart, lung &amp; liver programs, the group continued
            to meet.
          </p>
          <p>
            <strong>Nov 15, 1993</strong> the original members incorporated as
            Transplant Recipients International of New Mexico.
          </p>
          <p>
            <strong>April 2002</strong> the local group discontinued affiliation
            with TRIO and reorganized as Organ Transplant Recipients of New
            Mexico, Inc.
          </p>
          <p>
            <strong>Aug 7, 2002</strong> As Organ Transplant Awareness Program
            of New Mexico (OTAP) received 501 (c)(3) Letter of Determination
          </p>
          <p>
            <strong>June 17, 2015</strong> the Bylaws were formally amended.
          </p>
        </PaperDiv>
      </PaperSection>
      <PaperSection>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>OTAP Transplant Awareness Program</ContentHeader>
          <p>
            OTAP is an independent, non-profit 501(c)(3) corporation. Our
            members include transplant candidates, recipients, living donors,
            transplant family members and friends supporting our cause. We are
            dedicated to promoting organ donation and supporting each other.
          </p>
          <p>
            There are nearly 119,000 organ candidates on the United Network for
            Organ Sharing waiting list and nearly 800 New Mexicans are waiting
            for life saving organs. The typical wait time for a kidney in New
            Mexico is 5 years.
          </p>
        </PaperDiv>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>Tranplant Community Support Group</ContentHeader>
          <p>
            No membership required. Transplant candidates, recipients, organ
            donors, living donors, families and caregivers meet with a
            facilitator to share and discuss the experiences that are unique to
            organ donation.
          </p>
        </PaperDiv>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>Promote Organ Donor Awareness</ContentHeader>
          <p>
            As a member of OTAP assist at information booths promoting the need
            for organ donors. Share your personal story with other OTAP members,
            new candidates, civic, social groups, religious groups and media.
          </p>
        </PaperDiv>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>Organ Donation Awareness Scholarship</ContentHeader>
          <p>
            NM High School Seniors are invited to write an organ transplant
            related essay for the opportunity to win a scholarship
          </p>
        </PaperDiv>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>Attend Social Gatherings</ContentHeader>
          <p>
            Summer Family Picnic, Holiday Party. Dinners- last Wednesday of the
            month.
          </p>
        </PaperDiv>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>Become a member of OTAP</ContentHeader>
          <p>
            Receive a monthly informative newsletter, attend monthly meetings,
            volunteer at promotional events, be a scholarship essay reader, help
            with the newsletter, attend the support group be a mentor.
          </p>
        </PaperDiv>
      </PaperSection>
      <PaperSection>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>President</ContentHeader>
        </PaperDiv>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>
            Evelyn Rivera, <span className="font-weight-light">Treasurer</span>
          </ContentHeader>
          <p>
            Evelyn is a native New Mexican. She has two children and two
            grandchildren. Being raised in a military family she has lived in
            Europe, South America and several U.S. states. Her hobbies include
            reading, hiking, Tai Chi, sewing and learning the history of New
            Mexico. Her passion is promoting organ donation. Her first liver
            transplant was in July of 2011 and her second was in February 2015.
            She has enjoyed a 35 year career in real estate, most recently as a
            residential real estate appraiser.
          </p>
        </PaperDiv>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>Acting Secretary</ContentHeader>
        </PaperDiv>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>
            Venae Warner,{" "}
            <span className="font-weight-light">Support Group</span>
          </ContentHeader>
        </PaperDiv>
        <PaperDiv className="container-sm text-line-spacing-md">
          <ContentHeader>
            Margaret Lopez,{" "}
            <span className="font-weight-light">Scholarship Chairperson</span>
          </ContentHeader>
        </PaperDiv>
      </PaperSection>
    </Layout>
  );
};

export default whoWeAre;
