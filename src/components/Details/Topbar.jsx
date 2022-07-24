import React from "react"
import { DropdownButton, Dropdown, Container } from "react-bootstrap"
import { BiChevronLeft } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"

import "./topbar.css"

const Topbar = () => {
  return (
    <Container fluid className="sticky-top ">
      <div class="d-flex topNav justify-content-between align-items-center  mt-4" id="topNav">
        <div className="d-flex justify-content-between  ">
          <div className="d-flex justify-content-center align-items-center   topNav-icon mr-2">
            <BiChevronLeft />
          </div>
          <div className="d-flex justify-content-center align-items-center  topNav-icon ">
            <BiChevronRight />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <DropdownButton menuAlign="right" title="User name" id="dropdown-menu-align-right" variant="secondary" style={{ borderRadius: "39rem !important" }} className="buttonround">
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </Container>
  )
}

export default Topbar
