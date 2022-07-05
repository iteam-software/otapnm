import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { Button } from "react-bootstrap";
import Layout from "../components/Layout";
import Splash from "../components/Splash";
import ContentHeader from "../shared/ContentHeader";
import PaperDiv from "../shared/PaperDiv";
import PaperSection from "../shared/PaperSection";
import VideoWrapper from "../shared/VideoWrapper";

export default ({ location }) => {
  return (
    <Layout
      url={location.href}
      pageTitle="Our Stories"
      description="OTAP Our Stories Page"
    >
      <Splash title="Our Stories" />
      <PaperSection>
        <PaperDiv className="container-sm text-line-spacing-md" story>
          <ContentHeader>My Final Gift</ContentHeader>
          <p className="text-center w-50 mx-auto">
            It is now time for me to move on Into the dusk, but also the dawn. I
            will remain as the morning comes As I've left behind a gift for
            someone. So another may walk, may talk, may see Where their life was
            locked, I offered a key. I am a donor to someone in need, My final
            gift, my final deed. Sarah Todd, Ireland Daughter of a Heart
            Recipient
          </p>
        </PaperDiv>
      </PaperSection>
      <PaperSection>
        <PaperDiv className="container-sm" story>
          <ContentHeader>Lynn Davis, Liver Recipient</ContentHeader>
          <div className="row">
            <div className="col-lg-4 text-center">
              <img
                src="/assets/lynn.png"
                className="img-fluid max-height-sm"
                alt="Lynn Davis"
              />
            </div>
            <div className="col-lg-8">
              <p>
                In the spring of 2014, I suddenly began feeling ill, had a
                decrease of energy, and wanted to sleep all the time. Within 6
                weeks, the situation was far worse. I could barely drive, my
                cognitive abilities were affected, and I no longer had the
                energy to do the things I loved doing or even get out of bed. My
                doctor ran lab tests and found that my liver enzymes were
                extremely elevated.
              </p>
              <p>
                Two weeks later, I was hospitalized. A CT scan and Biopsy showed
                I was in acute (sudden &amp; severe onset) liver failure. I was
                told that I only had 5% liver function and I that I needed to
                find a liver clinic. Two days later, I was at Mayo Clinic in
                Phoenix being evaluated for a liver transplant. Within a few
                days, I was diagnosed with Fulminant Hepatic Toxicity and
                admitted to Mayo Hospital. I was in disbelief and was sure there
                had been a horrible mistake. After all, I was young (52) healthy
                and active.
              </p>
              <p>
                The liver is an amazing organ that has the ability to repair
                itself. The doctors at Mayo began treatment in the attempt to
                repair my failing liver. Unfortunately, my liver was too damaged
                and treatment was unsuccessful. The only alternative remaining
                was a new liver and without one, I would die in a very short
                time. I was placed on the “wait list,” joining over 120,000
                other people in the U.S. who were also waiting for a lifesaving
                organ transplant. Approximately 15,000 were in need of a liver.
              </p>
              <p>
                Over the next few days, my condition deteriorated. They moved me
                in to ICU and changed my status on the organ transplant wait
                list to “status 1A.” This status is reserved for patients with
                acute liver failure and a life expectancy of hours to a few days
                without a transplant. The survival rate for individuals with
                acute liver failure is less than 20% due to the sudden and rapid
                deterioration of the liver. The following morning on June 24,
                2014 I received the news that a matching liver had become
                available and that evening I underwent a successful liver
                transplant.
              </p>
              <p>
                On the second year anniversary of my liver transplant, I had the
                amazing experience of meeting my donor’s mother. My donor was a
                20 year old incredible young man that was in college to become a
                doctor. His aspiration was to help others and save lives and he
                did, just that! I think of my donor every day and am forever
                grateful for his decision to become a registered organ donor. If
                you are not already a registered organ donor, please consider
                becoming one. If you are a registered donor, thank you!
              </p>
            </div>
          </div>
        </PaperDiv>
      </PaperSection>
      <PaperSection>
        <PaperDiv className="container-sm" story>
          <ContentHeader>Evelyn Rivera, Liver Recipient</ContentHeader>
          <div className="row">
            <div className="col-lg-4 text-center">
              <img
                src="/assets/evelyn.jpg"
                className="img-fluid max-height-sm"
                alt="Evelyn Rivera"
              />
            </div>
            <div className="col-lg-8">
              <div className="text-line-spacing-md ">
                <p>
                  In the spring of 2014, I suddenly began feeling ill, had a
                  decrease of energy, and wanted to sleep all the time. Within 6
                  weeks, the situation was far worse. I could barely drive, my
                  cognitive abilities were affected, and I no longer had the
                  energy to do the things I loved doing or even get out of bed.
                  My doctor ran lab tests and found that my liver enzymes were
                  extremely elevated.
                </p>
              </div>
            </div>
          </div>
        </PaperDiv>
        <PaperDiv className="container-sm text-center">
          <VideoWrapper>
            <video controls>
              <source src="/assets/evelyn.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoWrapper>
        </PaperDiv>
      </PaperSection>
      <PaperSection>
        <PaperDiv className="container-sm text-line-spacing-lg" story>
          <ContentHeader>Robert Golding, Liver Recipient</ContentHeader>
          <p>
            Robert Golding is the recipient of a liver and kidney transplant. He
            was diagnosed with Hepatitis C in 2000. He received therapy to cure
            the virus in 2002, but his liver had gone into cirrhosis as a result
            of the many years that he had Hepatitis C. Robert contracted
            Hepatitis C from a blood transfusion in 1983 before there was a test
            to check for the virus. It is not possible to contract Hepatitis C
            from the blood supply now because of careful screening of blood and
            blood products. The complications from cirrhosis started in 2011 and
            things got worst until he was unable to work in 2013. He was
            admitted to Banner Hospital Phoenix in February 2014 for evaluation
            for a liver transplant. While he was there his kidneys failed.
            Banner could not perform the transplant due to portal vein
            thrombosis. Robert was then transferred to Mayo Clinic in
            Phoenix.They performed the transplant surgery for the liver and
            kidney at the same time. Robert received his transplant on May 23,
            2014. He is grateful for the donor and her family for the gift of
            life. His passion is bringing awareness to the public the need to
            become an organ donor!
          </p>
        </PaperDiv>
      </PaperSection>
      <PaperSection>
        <PaperDiv className="container-sm" story>
          <ContentHeader>
            Cathy Walters, Heart Transplant Recipient
          </ContentHeader>
          <div className="row">
            <div className="col-lg-4 text-center">
              <img
                className="img-fluid max-height-sm"
                src="/assets/cathy-with-medals.jpg"
                alt="Cathy Walters"
              />
            </div>
            <div className="col-lg-8">
              <div className="text-line-spacing-lg">
                <p>
                  In 2010, at the age of 65, I was diagnosed with a rare and
                  progressive heart disease by my cardiologist in Albuquerque. I
                  had a type of cardiopathy which caused arrhymias, so was given
                  an ICD (Implantable Cardioverter Defibrillator). This plus
                  medications controlled the disease for a few years. But in
                  late 2012 it was pretty clear that my heart was failing and
                  the next step, much to my dismay and shock, was a heart
                  transplant! I was referred to the Transplant Center at
                  Cedars-Sinai in Los Angeles, where my daughter lives.
                </p>
                <p>
                  On June 11, 2013, I was incredibly blessed to receive the
                  "gift of life," a new heart! I am grateful to my donor and her
                  family every day for making this possible. I also was very
                  fortunate to be at an excellent facility, to have the support
                  of many friends and family, and especially to have my daughter
                  as an amazing caregiver! I stayed in California for four
                  months and made many trips back to the clinic for routine
                  follow-up doctor visits and tests.{" "}
                </p>
                <p>
                  It was SO very good to get back home to the mountains in Los
                  Alamos in October, just as the fall colors were at their
                  height! Thanks to this miracle, I literally have a new life!
                  Instead of being depressed and thinking I had no future, I now
                  have returned to an independent and active life, traveling,
                  exercising, and helping others. One of my passions is
                  increasing the awareness of the need for more donors and
                  promoting organ, eye and tissue donation and transplantation.
                  I hope anyone reading this has a heart on his/her driver's
                  license!
                </p>
                <p>
                  My daughter and I were privileged to be part of Team New
                  Mexico at the 2018 Transplant Games of America, held in Salt
                  Lake City. The purpose of this biannual event is to celebrate
                  life and to extend the legacy of donors through recipients'
                  transformations to better health. The Games also demonstrate
                  hope and promise to the thousands of individuals who are
                  waiting for a life-restoring transplant and the games serve as
                  a tribute to honor donors - both living and deceased - whose
                  generosity has saved or healed the lives of individuals in
                  need. Besides all this, the Games are a competitive exhibition
                  of the determination, tenacity and spirit of transplanted
                  patients - made possible by the generosity of donors and their
                  families. I stepped out of my comfort zone and entered several
                  swimming events - and the results are shown in the photo -
                  eight gold medals! I hope to go back next year to New Jersey.
                  Donor Services of New Mexico provides a lot of support,
                  generously covering much of the cost to attend.
                </p>
                <p>
                  We have also been honored to be volunteers to decorate the
                  Rose Parade Donate Life Float the past three years! We have
                  met so many amazing people, both courageous recipients and
                  generous donor families. Be sure to watch for the Donate Life
                  Float next January 1st! They estimate 10,000 volunteer hours
                  are contributed each year.
                </p>
                <p>
                  OTAP welcomes any transplant recipient or candidate, donor
                  families, living donors, or anyone interested in our mission
                  to join us! Come to a meeting or sign up to receive the
                  monthly newsletter "Transplant Times."
                </p>
              </div>
            </div>
          </div>
        </PaperDiv>
        <div className="container text-center pt-3">
          <a href="mailto:organdonation@otapnm.com?subject=My%20Story%20Submission">
            <Button variant="light">
              <FaEnvelope className="mr-2"/>
              Send Us Your Story
            </Button>
          </a>
        </div>
      </PaperSection>
    </Layout>
  );
};
