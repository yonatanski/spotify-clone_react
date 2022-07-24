import React from "react"
import { Container } from "react-bootstrap"
import Topbar from "../Details/Topbar"
import GoodMorningCard from "../Details/GoodMorningCard"
import RecentlyPlayed from "../Details/RecentlyPlayed"

const BigView = () => {
  return (
    <>
      <Container fluid>
        <GoodMorningCard />
        <RecentlyPlayed />
        <RecentlyPlayed title="Your Top Mix" />
        <RecentlyPlayed title="Your Top Mix" />
      </Container>
    </>
  )
}

export default BigView
