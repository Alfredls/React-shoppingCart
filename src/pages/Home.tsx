import { CarouselSlider } from "../components/CarouselSlider"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 
 export const Home = () => {
   return (
    <Container className="contai" >
      <Row>
        <Col className="slider-txt" sm={4}>
          <h2 >Home Cart</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eaque laborum incidunt non consectetur consequatur animi hic quos dignissimos.</p>
        </Col>
        <Col>
          <CarouselSlider />
        </Col>
      </Row>
    </Container>
     
   )
 }
 