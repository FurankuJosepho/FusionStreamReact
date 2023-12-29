//Scss import
import "../scss/Navbar.scss";
//Import Bootstrap from React
import  {Navbar, Nav, Container,Offcanvas}  from "react-bootstrap";

const Navigation = () => {
  return (
    <>
    {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="DarkBlue">
          <Container>
            <Navbar.Brand href="/"><span>F</span>usion<span>S</span>tream</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/series">Series</Nav.Link>
                  <Nav.Link href="/movies">Movies</Nav.Link>
                  <Nav.Link href="/manga">Manga</Nav.Link>
                  <Nav.Link href="/manwha">Manwha</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Navigation
