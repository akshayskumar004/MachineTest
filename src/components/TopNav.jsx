import { useState } from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import "./TopNav.scss";

export const TopNav = ({ onSelectRegion }) => {
  const [activeKey, setActiveKey] = useState("all");

  const handleSelect = (selectedKey) => {
    console.log(selectedKey, "selectedKey");

    setActiveKey(selectedKey);
    onSelectRegion(selectedKey);
  };
  return (
    <Container className="mt-3">
      <Row className="align-items-center justify-content-between">
        <Col>
          <h5 onC className="title">
            Countries
          </h5>
        </Col>
        <Col xs="auto">
          <Nav
            variant="underline"
            activeKey={activeKey}
            onSelect={handleSelect}
          >
            <Nav.Item>
              <Nav.Link
                eventKey="all"
                className={activeKey === "all" ? "tab-active" : "tab-inactive"}
              >
                All
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="asia"
                className={activeKey === "asia" ? "tab-active" : "tab-inactive"}
              >
                Asia
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="europe"
                className={
                  activeKey === "europe" ? "tab-active" : "tab-inactive"
                }
              >
                Europe
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};
