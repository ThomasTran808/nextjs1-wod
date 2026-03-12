"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";

const TopMenu = () => (
  <Container fluid className='bg-dark text-light p-3'>
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#"><Image src="/maui-cropped-Logo-1.png" alt="Maui Brewing Co. Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center">
            <Nav.Link href="#">  </Nav.Link>
            <Nav.Link href="#">  </Nav.Link>
            <Nav.Link href="#"><Image src="/maui.png" alt="Maui Island" height={50} width={50} /></Nav.Link>
            <Nav.Link href="#">SOUTH MAUI<br /><strong>KIHEI</strong></Nav.Link>
            <Nav.Link href="#"><Image src="/maui.png" alt="Maui Island" height={50} width={50} /></Nav.Link>
            <Nav.Link href="#">WEST MAUI<br /><strong>KA&apos;ANAPALI</strong></Nav.Link>
            <Nav.Link href="#"><Image src="/oahu.png" alt="Maui Island" height={50} width={50} /></Nav.Link>
            <Nav.Link href="#">OAHU<br /><strong>KAILUA</strong></Nav.Link>
            <Nav.Link href="#"><Image src="/oahu.png" alt="Maui Island" height={50} width={50} /></Nav.Link>
            <Nav.Link href="#">OAHU<br /><strong>WAIKIKI</strong></Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#">  </Nav.Link>
            <Nav.Link href="#">  </Nav.Link>
            <Nav.Link href="#">  </Nav.Link>
            <Nav.Link href="#">  </Nav.Link>
            <Nav.Link href="#">  </Nav.Link>
            <Nav.Link href="#"><Image src="/hamburger.png" alt="Menu" height={30} width={30} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Container>
);

export default TopMenu;