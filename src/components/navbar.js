import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
} from 'reactstrap';
import logo_lope from "../images/logo_lope.jpg";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [navbar, setNavbar] = useState(false);

  const changeBackground =() => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div >
      <Navbar light expand="md" fixed="top" className={navbar ? "navbar active" : 'navbar' }>
            <NavbarBrand href="/" style={{color:"cornflowerblue"}}>
              <img src={logo_lope} style = {{height:"35px"}} alt="lope icon"></img> </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar >
                <Nav className="mr-auto">
                    <NavLink href="#latest-news" className="navtext">最新消息</NavLink>
                    <NavLink href="#about" className="navtext">關於LOPE</NavLink>
                    <NavLink href="#resources" className="navtext">實驗室資源</NavLink>
                    <NavLink href="#members" className="navtext">成員</NavLink>
                    <NavLink href="#publications" className="navtext">研究成果</NavLink>
                    <NavLink href="#contact-us" className="navtext">聯絡我們</NavLink>                                        
                </Nav>
            </Collapse>
      </Navbar>
    </div>
  );
}


export default Example;