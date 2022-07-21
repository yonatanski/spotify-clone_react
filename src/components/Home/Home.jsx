import React from "react"
import { Col, Row, Container } from "react-bootstrap"
import BigView from "../BigView/BigView"
import Sidebar from "../Sidebar/Sidebar"

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="px-0">
          <Sidebar />
        </Col>
        <Col xs={10}>
          <BigView />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
