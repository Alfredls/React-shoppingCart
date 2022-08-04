import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SliderCarousel } from "../components/SliderCarousel";
import { SliderText } from "../components/SliderText";
import { SliderCard } from "../components/SliderCard";
import { SliderCard2 } from '../components/SliderCard2';


 
 export const Home = () => {
   return (
    <Container className="contai" >
      <Row>
        <SliderCarousel />
      </Row>
      <Row className="justify-content-md-center" >
        <SliderText />
      </Row>
      <Row  className="d-flex justify-content-center align-items-center">
        <SliderCard />
      </Row>
      <Row  className="d-flex justify-content-center align-items-center">
        <SliderCard2 />
      </Row>
      <Row >
        <Col className="footer">
          <span>Copyright © 2022 Shopping Cart</span>
        </Col>
      </Row>
    </Container>
     
   )
 }
 