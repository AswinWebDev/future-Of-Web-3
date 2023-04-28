import { secondaryVeryDarkBlue } from "../colors";
import { secondaryNeutralWhite } from "../colors";
import { secondaryGrayishBlue } from "../colors";
import { primaryColorOrange } from "../colors";
import styled from "styled-components";

const StyledNewsTab = styled.div`
  padding: 20px 40px;
  background-color: ${secondaryVeryDarkBlue};
  color: ${secondaryNeutralWhite};
  max-width: 300px;
  @media (max-width: 768px) {
    min-width: 80vw;
    max-width: 90vw;
    margin-top: 40px;
  }
`;

const StyledChild = styled.div`
  margin: 30px 0px;
`;

const StyledBorder = styled.div`
  border: 0.1px solid #fff;
  min-width: 10px;
  max-height: 0.1px;
`;

const StyledP = styled.p`
  font-size: 15px;
  color: ${secondaryGrayishBlue};
`;

const StyledH2 = styled.h2`
  color: ${primaryColorOrange};
  font-size: 40px;
`;

const StyledTitle = styled.h4`
  font-size: 20px;
  &:hover {
    color: ${primaryColorOrange};
    cursor: pointer;
  }
`;

const NewsTab = () => {
  return (
    <StyledNewsTab>
      <StyledH2>New</StyledH2>
      <StyledChild>
        <StyledTitle>Hydrogen Vs Electric Cars</StyledTitle>
        <StyledP>Will hydrogen-fueled cars ever catch upto EVs?</StyledP>
      </StyledChild>
      <StyledBorder />
      <StyledChild>
        <StyledTitle>The Downsides of AI Artistry</StyledTitle>
        <StyledP>
          What are the possible adverse effects of on-demand AI image
          generation?
        </StyledP>
      </StyledChild>
      <StyledBorder />
      <StyledChild>
        <StyledTitle>Is VC Funding Drying Up?</StyledTitle>
        <StyledP>Will hydrogen-fueled cars ever catch upto EVs?</StyledP>
      </StyledChild>
    </StyledNewsTab>
  );
};

export default NewsTab;
