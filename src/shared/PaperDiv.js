import styled from "@emotion/styled";

const PaperDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.65);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 20px;
  margin-bottom: 20px;
  line-height: ${props => (props.story ? "37.647px;" : "")};
  @media (max-width: 768px) {
      width: 90%;
  }
`;

export default PaperDiv;
