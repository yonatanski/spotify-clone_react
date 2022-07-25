import React from "react"
import "./mediaplaye.css"

import img1 from "../../assets/img/JColeKOD.jpg"
import { Container, Col, Row } from "react-bootstrap"

const MediaPlayer = () => {
  return (
    <div className="row mediaplayerContainer mt-5 mt-4 d-flex justify-content-between justify-content-md-center align-items-center fixed-bottom text-white ">
      <Col className="col-3 d-none d-sm-block">
        <div className=" currentlyplayingicon d-flex ml-3 align-items-center">
          <img src={img1} className="imgPlayer" alt="currentlyplayingicon" />
          <div className="d-flex flex-column ml-2">
            <p className="mb-0">AmateviAmateviAmateviAmatevi</p>
            <small className="text-muted">CORTEX</small>
          </div>
          <div className="currentlyplayingicon__gap d-flex ml-5">
            <i class="bi bi-heart"></i>
            <i class="bi bi-dash-circle"></i>
          </div>
        </div>
      </Col>
      <Col className="col-6 ">
        <div className=" playcontroller d-flex flex-column">
          <div className="playcontroller__icon d-flex justify-content-center   mt-1 mb-2 align-items-center">
            <i class="playcontroller__icon--sizeH bi bi-skip-start-fill"></i>
            <i class="playcontroller__icon--size bi bi-play-circle-fill"></i>
            <i class="playcontroller__icon--sizeH bi bi-skip-end-fill"></i>
          </div>
          <div className="playcontroller__graph d-flex justify-content-center align-items-baseline align-content-center">
            <p class="">0:00</p>
            <div class="progress-bar progress-bar-color align-items-baseline mx-2" role="progressbar" style={{ width: "70%", height: "5px", backgroundColor: "white !important" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            <p class="">1:00</p>
          </div>
        </div>
      </Col>
      <Col className="col-3">
        <div className=" d-flex justify-content-end align-items-center  align-items-center ">
          <div className=" volumeController d-flex mr-5">
            <i class="bi bi-hdd-stack-fill"></i>
            <i class="bi bi-volume-down-fill"></i>
            <div class="progress-bar progress-bar-color " role="progressbar" style={{ width: "30%", height: "5px", backgroundColor: "white !important" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </Col>
    </div>
  )
}

export default MediaPlayer
