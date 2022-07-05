import styled from "@emotion/styled";

const ContentHeader = styled.h4`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 10px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: ${props => (props.lg ? "2.5em" : "1.5em")};
`;
export default ContentHeader;
