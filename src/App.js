import './App.css';
import Heading from './components/Heading';
import Body from './components/Body';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (

    <Container>
      <Row>
        <Col>
        <Heading />
        <Body />
        </Col>
      </Row>
    </Container>

        
 
  );
}

export default App;
