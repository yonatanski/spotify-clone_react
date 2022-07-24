import React from "react"
import "./recentlyPlayed.css"
import img1 from "../../assets/img/JColeKOD.jpg"
import { Container, Col, Row } from "react-bootstrap"
import { recentlyplayedgdata } from "../../data/data"

const RecentlyPlayed = ({ title }) => {
  return (
    <Row className="mt-4 d-flex justify-content-between mb-5 ">
      <Col lg={12} className="ml-0 px-0 mb-2 d-flex justify-content-between ">
        <div>
          <h4 id="display" class="  text-light">
            {title ? title : "Recently played"}
          </h4>
        </div>
        <div>
          <small id="display" class="text-muted">
            SEE ALL
          </small>
        </div>
      </Col>
      {recentlyplayedgdata.map((item, index) => (
        <Col xs={6} md={4} lg={2} className=" mx-n1 px-0 mb-2" key={index}>
          <div className="music-card mx-1" id="cardHover" onmouseover="mouseOver('linear-gradient(180deg, rgb(28, 4, 83) 0%, rgb(0, 0, 0) 35%)')" onmouseout="mouseOut() ">
            <div class="card music-card2 rounded">
              <img class="img-fluid w-100 align-self-center mt-3 pl-3 pr-3" src={img1} alt="Card  cap" />
              <div class="card-body">
                <h6>{item.title}</h6>
                <p class="card-text">400 songs</p>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default RecentlyPlayed
