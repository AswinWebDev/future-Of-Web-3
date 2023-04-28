import Navbar from "./components/Navbar";
import Readmore from "./components/Readmore";
import NewsTab from "./components/NewsTab";
import web3Image from "./assets/images/image-web-3-desktop.jpg";
import web3ImageMobile from "./assets/images/image-web-3-mobile.jpg";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useState } from "react";

const StyledParent = styled.div`
  padding: 10px 150px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

const StyledChild = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    min-width: 90vw;
  }
`;

const StyledImg = styled.img`
  max-width: 800px;

  @media (max-width: 768px) {
    content: url(${web3ImageMobile});
    max-width: 90vw;
  }
`;
const StyledH3 = styled.h3`
  font-size: 55px;
  font-weight: 800;
  max-width: 400px;
  line-height: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
    max-width: 90vw;
    flex-direction: column;
  }
`;

const StyledChild2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 800px;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 90vw;
    gap: 0px;
  }
`;

const StyledP = styled.p`
  line-height: 30px;
  /* 
  max-width: 300px; 
  */
  @media (max-width: 768px) {
    max-width: 90vw;
    gap: 0px;
  }
`;

const TransparentBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <StyledParent>
      {/*  */}
      {isMenuOpen && (
        <TransparentBackground onClick={() => setIsMenuOpen(false)} />
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* <Readmore /> */}
      <StyledChild>
        <div>
          <StyledImg src={web3Image} alt="web3" />
          <StyledChild2>
            <StyledH3>The Bright Future of Web 3.0?</StyledH3>
            <div>
              <StyledP>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back in the hands of the people. But
                is it really fulfilling its promise?
              </StyledP>
              <Readmore />
            </div>
          </StyledChild2>
        </div>
        <div>
          <NewsTab />
        </div>
      </StyledChild>
      <div className="footerContainer">
        <Footer />
      </div>
    </StyledParent>
  );
};

export default App;
