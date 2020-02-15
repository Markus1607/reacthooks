import React, { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const Details = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);

  const fetchItem = async url => {
    const response = await fetch(url);
    response
      .json()
      .then(setLoading(false))
      .then(response => setItem(response))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchItem(`https://api.punkapi.com/v2/beers/${id}`);
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>'Loading...'</div>
      ) : (
        item.map(item => (
          <Fragment key={item.id}>
            <Container>
              <div className="h1Container">
                <h1>{item.name.toUpperCase()}</h1>
              </div>
              <Row>
                <Col md={6}>
                  <img
                    draggable="false"
                    src={item.image_url}
                    alt=""
                    height="100%"
                    width="70%"
                  />
                </Col>
                <Col md={6}>
                  <h2 className="desc">Description</h2>
                  <p>{item.description}</p>
                  <Button variant="info" size="lg">
                    <Link to="/" className="link">
                      Back
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Fragment>
        ))
      )}
    </div>
  );
};

export default Details;
