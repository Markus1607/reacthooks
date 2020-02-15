import React from 'react';
import { chunk } from 'lodash';
import { Link } from 'react-router-dom';
import  Header from './Navbar';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

const Grid = (props) => {

    const { data } = props;
    const cols = 3;
    const colWidth = 12 / cols;
    const rows = chunk(data, cols);

    return (
        <Container class="text-center">
            <Header {...props}/>
            <div>
                {rows.map((cols, index) => (
                        <Row key={index}>
                            {cols.map((beer) => (
                                <Col sm={12} md={colWidth} key={beer.id}>
                                    <Card style={{ width: '20rem', height: '100%'}}>
                                        <Card.Body>
                                            <Card.Title className="card-title">{beer.name}</Card.Title>
                                            <Card.Img variant="top" src={beer.image_url} />
                                            <Button variant="outline-dark" className="link-btn">
                                                <Link to={`details/${beer.id}`}>Find out more</Link>
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    ))}
            </div>
        </Container>
    )
}

export default Grid;







