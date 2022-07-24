import React from "react"
import "./goodMorning.css"
// import img1 from "../../assets/img/JColeKOD.jpg"
import { Container, Col, Row } from "react-bootstrap"
import { goodmorningdata } from "../../data/data.js"

const GoodMorningCard = () => {
  return (
    <Row className="mt-3 ">
      <Col lg={12} className="ml-0 px-0 mb-2">
        <h4 id="display" class="  text-light">
          Good morning
        </h4>
      </Col>
      {goodmorningdata.map((item, index) => (
        <Col xs={6} md={4} lg={3} className="ml-0 mx-n1 px-0 mb-2" key={index}>
          <div className="music-card mx-2" id="cardHover" onmouseover="mouseOver('linear-gradient(180deg, rgb(28, 4, 83) 0%, rgb(0, 0, 0) 35%)')" onmouseout="mouseOut() ">
            <div className="media d-flex">
              <img src={item.img} className="mr-3  img1" alt="..." />
              <div className="media-body bodyHover d-flex align-self-center justify-content-between">
                <div className="d-flex align-self-center justify-content-center">
                  <h6 className="mt-0">{item.title}</h6>
                </div>

                <h6 className="card-title mr-3">
                  <i class="bi bi-play-circle-fill playHover"></i>
                </h6>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default GoodMorningCard
