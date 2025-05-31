import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../store/countriesSlice/countriesSlice";
import "./Home.scss";
import { TopNav } from "../components/TopNav";
import { CountryCard } from "../components/CountryCard";
import { Col, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { Copyright } from "../components/Copyright";
import Carousel from "../components/Caurosal";

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
  }, [dispatch, region, baseVisibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + baseVisibleCount);
  };

  return (
    <div className="home-wrapper">
      <TopNav onSelectRegion={selectRegion} />
      <h2 className="section-title">WELCOME</h2>
      <Carousel countries={list} />
      <div></div>
      <Row className="g-4 justify-content-center country-wrapper">
        {list.slice(0, visibleCount).map((country) => (
          <Col
            key={country.name}
            md={6}
            xs={12}
            className="d-flex justify-content-center"
          >
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>
      {visibleCount < list.length && (
        <div className="load-more-btn-wrapper">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}

      <Copyright />
    </div>
  );
}

export default Home;
