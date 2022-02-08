import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NewsItems.css";

const NewsItems = ({ title, description, url, urlToImage }) => {
  return (
    <div className="newsdiv">
      <Container className="newsBox">
        <Row
          className="newsItems"
          style={{ height: "500px", textAlign: "center" }}
        >
          <Col>
            <a href={url}>
              <img className="newsimage" src={urlToImage} alt="" />
            </a>
          </Col>
          <Col className="newsContent">
            <a className="newsTitle" href={url}>
              {title}
            </a>
            <p className="newsDescription">{description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsItems;
