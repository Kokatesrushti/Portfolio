import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6} className="text-center text-sm-end">
         <div className="footer-icon">
          <div className="social-icon">
          <a href="https://www.linkedin.com/in/srushti-kokate-a72973227/" target="_blank"><img src={navIcon1} alt="image3" /></a>
                <a href="https://github.com/Kokatesrushti" target="_blank"><img src={navIcon4} alt="imagr2" /></a>
                <a href="https://www.instagram.com/srushtikokate_03/" target="_blank"><img src={navIcon3} alt="image1" /></a>
          </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer