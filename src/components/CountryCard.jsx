import { Card, Col, Row } from "react-bootstrap";
import "./CountryCard.scss";

export const CountryCard = ({ country }) => {
  console.log(country, "country");

  return (
    <Card className="card-wrapper">
      <Card.Body>
        <Row>
          <img src={country.flag} alt={country.name} className="country-img" />
          <Col>
            <h5 className="name">{country.name}</h5>
            <p className="region">{country.region}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
