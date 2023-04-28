import styled from "styled-components";
import laptopImage from "../assets/images/image-top-laptops.jpg";
import retroImage from "../assets/images/image-retro-pcs.jpg";
import gamingImage from "../assets/images/image-gaming-growth.jpg";
import { secondaryDarkGrayishBlue, secondaryVeryDarkBlue } from "../colors";
import { secondaryNeutralWhite } from "../colors";
import { primaryColorRed } from "../colors";
import { secondaryGrayishBlue } from "../colors";
// import {secondaryVeryDarkBlue} from "../colors";
const Footer = () => {
  const Parent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 80px;
    @media (max-width: 768px) {
      margin-top: 40px;
      flex-direction: column;
      align-items: center;
      max-width: 90vw;
      gap: 10px;
    }
  `;
  const Child1 = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 768px) {
      min-width: 80vw;
    }
  `;
  const Child2 = styled.div`
    @media (min-width: 768px) {
      position: relative;
    }
    @media (max-width: 768px) {
    }
  `;
  const Child31 = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${secondaryGrayishBlue};
  `;
  const Child32 = styled.div`
    font-size: 20px;
    font-weight: 800;
    color: ${secondaryVeryDarkBlue};
    margin-bottom: 10px;
    &:hover {
      color: ${primaryColorRed};
      cursor: pointer;
    }
    @media (min-width: 768px) {
    }
  `;
  const Child33 = styled.div`
    @media (min-width: 768px) {
      position: absolute;
      bottom: 0;
    }
    font-size: 15px;
    color: ${secondaryDarkGrayishBlue};
  `;
  const Image = styled.img`
    width: 130px;
    @media (max-width: 768px) {
      width: 50vw;
    }
  `;
  return (
    <Parent>
      {/* child1 here */}
      <Child1>
        <div>
          <Image src={retroImage} alt="retroImage" />
        </div>
        <Child2>
          <Child31>01</Child31>
          <Child32>Reviving Retro PC's</Child32>
          <Child33>
            What happens when old PC's are given modern upgrades?
          </Child33>
        </Child2>
      </Child1>
      {/* child1 here */}
      {/* child 2 here */}
      <Child1>
        <div>
          <Image src={laptopImage} alt="retroImage" />
        </div>
        <Child2>
          <Child31>02</Child31>
          <Child32>Top 10 Laptops of 2022</Child32>
          <Child33>Our best picks for various needs and budgets.</Child33>
        </Child2>
      </Child1>
      {/* child 2 here */}
      {/* child 3 here */}
      <Child1>
        <div>
          <Image src={gamingImage} alt="retroImage" />
        </div>
        <Child2>
          <Child31>03</Child31>
          <Child32>The growth of Gaming</Child32>
          <Child33>How the pandemic has sparked fresh opportunities</Child33>
        </Child2>
      </Child1>
      {/* child 3 here */}
    </Parent>
  );
};

export default Footer;
