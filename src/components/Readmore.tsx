import styled from "styled-components";
import { secondaryVeryDarkBlue } from "../colors";
import { secondaryNeutralWhite } from "../colors";
import { primaryColorRed } from "../colors";

const Readmore = () => {
  const Parent = styled.div`
    max-width: 150px;
    padding: 20px 40px;
    background-color: ${primaryColorRed};
    &:hover {
      background-color: ${secondaryVeryDarkBlue};
      cursor: pointer;
    }
    color: ${secondaryNeutralWhite};
    letter-spacing: 5px;
    text-transform: uppercase;
    font-size: 10px;
    text-align: center;
  `;
  return <Parent>Read more</Parent>;
};

export default Readmore;
