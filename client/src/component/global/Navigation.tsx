import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const NavigationMenu = () => {
  return (
    <Navbar className="me-2 " bg="light" expand="lg">
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon={faFilm} className="ms-4 me-2" />
        Movie<span style={{ color: "#02a8c7" }}>Hub</span>
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="flex-end" id="basic-navbar-nav">
          <Nav
            className="me-auto 
                "
          >
            <Nav.Link className="me-2" href="/movies-coming">
              Coming Soon
            </Nav.Link>
            <Nav.Link className="me-2 " href="/movies-in-theaters">
              Movies in Theaters
            </Nav.Link>
            <Nav.Link className="me-2" href="/top-rated-india">
              Top Rated Indian Movies
            </Nav.Link>
            <Nav.Link className="me-2" href="/top-rated-movies">
              Top Rated World Wide Movies
            </Nav.Link>
            <Nav.Link href="/favourite">Favourites</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
