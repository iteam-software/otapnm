import React from "react";
import PaperSection from "../shared/PaperSection";
import PaperDiv from "../shared/PaperDiv";

const Books = ({ ContentHeader }) => {
  return (
    <PaperSection>
      <ContentHeader lg className="container-sm">
        Books
      </ContentHeader>
      <PaperDiv className="container-sm">
        <p>
          Thomas Starzl, M.D., PhD "The Puzzle People: Memoirs Of A Transplant Surgeon"
        </p>
        <p>
          Given the tensions and demands of medicine, highly successful physicians and surgeons 
          rarely achieve equal success as prose writers.  It is truly extraordinary that a major, 
          international pioneer in the controversial field of transplant surgery should have 
          written a spellbinding, and heart-wrenching, autobiography.
        </p>
        <p>
          <a
            href="https://www.amazon.com/Puzzle-People-Memoirs-Transplant-Surgeon/dp/0822958368"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.amazon.com/Puzzle-People-Memoirs-Transplant-Surgeon/dp/0822958368
          </a>
        </p>
      </PaperDiv>
    </PaperSection>
  );
};

export default Books;
