import React from "react"
import "./home.css"
import { Col, Row, Container } from "react-bootstrap"
import BigView from "../BigView/BigView"
import Topbar from "../Details/Topbar"
import MediaPlayer from "../MediaPlayer/MediaPlayer"
import Sidebar from "../Sidebar/Sidebar"

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="sidemenu px-0 ">
          <Sidebar />
        </Col>
        <Col xs={10} className="d-flex mb-5 flex-column ">
          <Topbar />
          <BigView />
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="mt-5 ">
          <MediaPlayer />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
