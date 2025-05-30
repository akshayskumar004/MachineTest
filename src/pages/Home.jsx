import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../store/countriesSlice/countriesSlice";
import "./Home.scss";
import { TopNav } from "../components/TopNav";
import { CountryCard } from "../components/CountryCard";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const baseVisibleCount = isMobile ? 6 : 12;
  const dispatch = useDispatch();
  const [region, selectRegion] = useState("all");
  const [visibleCount, setVisibleCount] = useState(baseVisibleCount);
  const { list } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries(region));
    setVisibleCount(baseVisibleCount);
  }, [baseVisibleCount, dispatch, region]);

  return (
    <div>
      <TopNav onSelectRegion={selectRegion} />
      <Row className="g-4 justify-content-center country-wrapper">
        {list.map((country) => (
          <Col
            key={country.name}
            md={6}
            className="d-flex justify-content-center"
          >
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
