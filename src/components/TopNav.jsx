import { useState } from "react";
import { Col, Container, Row, Nav, Offcanvas, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "./TopNav.scss";
import stackImg from "../assets/images/stack.png";

export const TopNav = ({ onSelectRegion }) => {
  const [activeKey, setActiveKey] = useState("all");
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleSelect = (selectedKey) => {
    setActiveKey(selectedKey);
    onSelectRegion(selectedKey);
    setShowOffcanvas(false);
  };

  return (
    <Container className="mt-3">
      <Row className="align-items-center justify-content-between">
        <Col>
          <h5 className="title">Countries</h5>
        </Col>

        <Col xs="auto">
          {isMobile ? (
            <>
              <Button
                variant="light"
                onClick={() => setShowOffcanvas(true)}
                className="border-0 p-0 bg-transparent"
              >
                <img
                  src={stackImg}
                  alt="menu"
                  style={{ width: "24px", height: "24px" }}
                />
              </Button>

              <Offcanvas
                show={showOffcanvas}
                onHide={() => setShowOffcanvas(false)}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Select Region</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav
                    variant="underline"
                    activeKey={activeKey}
                    onSelect={handleSelect}
                    className="flex-column"
                  >
                    <Nav.Item>
                      <Nav.Link
                        eventKey="all"
                        className={
                          activeKey === "all" ? "tab-active" : "tab-inactive"
                        }
                      >
                        All
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="asia"
                        className={
                          activeKey === "asia" ? "tab-active" : "tab-inactive"
                        }
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
                </Offcanvas.Body>
              </Offcanvas>
            </>
          ) : (
            <Nav
              variant="underline"
              activeKey={activeKey}
              onSelect={handleSelect}
            >
              <Nav.Item>
                <Nav.Link
                  eventKey="all"
                  className={
                    activeKey === "all" ? "tab-active" : "tab-inactive"
                  }
                >
                  All
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="asia"
                  className={
                    activeKey === "asia" ? "tab-active" : "tab-inactive"
                  }
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
          )}
        </Col>
      </Row>
    </Container>
  );
};
