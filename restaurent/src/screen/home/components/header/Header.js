import React , { Component } from 'react'
import { Col, Button , Nav, Container,Navbar} from 'react-bootstrap'
import { isMobile } from 'react-device-detect';
import './Header.scss'
import logo from '../../../../img/logo1122.png'

class Header extends Component {
    constructor(props) {
		super(props);
    }
    render() {
        return(
            <div className="header-page">
               <Navbar sticky="top" bg="light" expand="lg">
                    <Navbar.Brand md="3" sm="3" lg="3" xs="3" href="#home">
                        <Col>
                            
                            <img src={logo}
                            height={42}
                            />
                        </Col>
                    </Navbar.Brand>
                    <Navbar.Toggle className="toggle" position="bottom" aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse md="9" sm="9" lg="9" className="collapse menu" id="basic-navbar-nav">
                        <Nav className="menulist">
                            <Nav.Link className="nav-link" href="/components/Markup/#home">Specialities</Nav.Link>
                            <Nav.Link className="nav-link" href="/components/Markup/#About">Menu</Nav.Link>
                            <Nav.Link className="nav-link" href="/components/Markup/#Services">Reservation</Nav.Link>
                            <Nav.Link className="nav-link" href="#signUp">Contact</Nav.Link>
                        </Nav>                       
                    </Navbar.Collapse>
                    </Navbar>
            </div>
        )
    }
}
export default Header;
