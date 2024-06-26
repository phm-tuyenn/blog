import { Button, Container, Nav, Navbar, Offcanvas, Stack, Image } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useState } from "react";
import "./css/navbar.css"
import logo from "../assets/logo.jpg"

export default function Navigation() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  const toggleVisible = () => { 
    const scroll = document.documentElement.scrollTop; 
    if (scroll > 100){ 
      setScrolled(true) 
    }  
    else if (scroll <= 100){ 
      setScrolled(false) 
    } 
  }; 
  window.addEventListener('scroll', toggleVisible); 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className="rounded-bottom dark" style={{ backgroundColor: (scrolled) ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)" }} sticky="top" id="top" data-bs-theme="dark">
      <Container fluid className="px-3">
        <Navbar.Brand className="ms-4">
          <Link to="/">
            <Image src={logo} width="30" height="30" className="d-inline-block align-top me-2 rounded" alt="Logo"></Image>
            Phạm Tuyên
          </Link>
        </Navbar.Brand>
        <Nav className="float-end">
          <Nav.Item className="mx-4 d-none d-sm-block">
            <Link to="/"><Button className="nav-button">Bài viết</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-4 d-none d-sm-block">
            <Link to="/about"><Button className="nav-button">Giới thiệu</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-4 d-none d-sm-block">
            <Link to="/donate"><Button className="nav-button">Donate</Button></Link>
          </Nav.Item>
          <Nav.Item className="mx-4 d-sm-none">
            <Button as="a" className="nav-button" onClick={handleShow}>
              <span className="material-icons-outlined">menu</span>
            </Button>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
    
    <Offcanvas show={show} onHide={handleClose} data-bs-theme="dark" className="dark">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title><Link to="/">
          <Image src={logo} width="30" height="30" className="d-inline-block align-top me-2" alt="Logo"></Image>
          Phạm Tuyên
        </Link></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          <Link onClick={handleClose} to="/"><Button className="nav-button">Bài viết</Button></Link>
          <Link onClick={handleClose} to="/about"><Button className="nav-button">Giới thiệu</Button></Link>
          <Link onClick={handleClose} to="/donate"><Button className="nav-button">Donate</Button></Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}