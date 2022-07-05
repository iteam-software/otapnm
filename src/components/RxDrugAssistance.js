import React from "react";
import PaperSection from "../shared/PaperSection";
import PaperDiv from "../shared/PaperDiv";

const RxDrugAssistance = ({ ContentHeader }) => {
  return (
    <PaperSection>
      <ContentHeader lg className="container-sm">
        Rx Drug Assistance
      </ContentHeader>
      <PaperDiv className="container-sm">
        <p>
          Patient assistance programs for prescribed immunosuppressive
          medications are available by contacting:
        </p>

        <p>
          <strong>Roche Patient Assistance Program (Cellcept)</strong>
          <br />
          (800) 772-5790
        </p>
        <p>
          <strong>Novartis Patient Assistance Program (Cyclosporine)</strong>
          <br />
          (888) 455-6655
        </p>
        <p>
          <strong>
            Novartis Transplant Reimbursement Information (Neoral)
          </strong>
          <br />
          (877) 952-1000
        </p>
        <p>
          <strong>Astellas Patient Assistance Program (Prograf)</strong>
          <br />
          (800) 477-6472
        </p>
        <p>
          <strong>Abbott Patient Assistance Program (Gengraf)</strong>
          <br />
          (800) 633-9110
        </p>
      </PaperDiv>
    </PaperSection>
  );
};

export default RxDrugAssistance;
