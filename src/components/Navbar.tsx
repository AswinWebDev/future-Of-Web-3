import styled from "styled-components";
import Logo from "../assets/images/logo.svg";
import MenuIcon from "../assets/images/icon-menu.svg";
import MenuIconClose from "../assets/images/icon-menu-close.svg";
import { primaryColorRed } from "../colors";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const StyledParent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0px;
    @media (max-width: 768px) {
    }
  `;
  const StyledChild1 = styled.img`
    font-weight: bold;
  `;
  const StyledChild2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    font-size: 15px;
    @media (max-width: 768px) {
      display: ${isMenuOpen ? "flex" : "none"};
      justify-content: space-evenly;
      position: fixed;
      flex-direction: column;
      align-content: center;
      background-color: white;
      width: 50vw;
      height: 100vh;
      top: 0;
      right: 0;
    }
  `;
  const StyledChild3 = styled.img`
    @media (min-width: 768px) {
      display: none;
    }
    margin-right: 20px;
  `;
  const NavElement = styled.p`
    cursor: pointer;
    &:hover {
      color: ${primaryColorRed};
    }
    @media (max-width: 768px) {
      margin-left:20px;
  `;
  const MenuClose = styled.img`
    position: fixed;
    top: 10px;
    right: 20px;
    font-weight: bold;
    @media(min-width: 768px){
      display:none;
    }
  }`;

  return (
    <StyledParent>
      <StyledChild1 src={Logo} alt="Logo" />
      {!isMenuOpen ? (
        <StyledChild3
          src={MenuIcon}
          alt="menu-icon"
          onClick={() => setIsMenuOpen(true)}
        />
      ) : null}
      <StyledChild2>
        <MenuClose
          src={MenuIconClose}
          alt="menu-icon"
          onClick={() => setIsMenuOpen(false)}
        />
        <NavElement>Home</NavElement>
        <NavElement>New</NavElement>
        <NavElement>Popular</NavElement>
        <NavElement>Trending</NavElement>
        <NavElement>Catogories</NavElement>
      </StyledChild2>
    </StyledParent>
  );
};

export default Navbar;
