import React from "react"
import "./sidebar.css"
import spoftifylogo from "../../assets/img/Spotify_Logo_RGB_White.png"
import { Container } from "react-bootstrap"
import { FaHome } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { BiLibrary } from "react-icons/bi"
import { RiAddBoxFill } from "react-icons/ri"
import { MdFavorite } from "react-icons/md"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <Container className="sidebar px-0">
      <div className="sidebarmain_container mt-4">
        {/* <div className="d-flex flex-column sidebar__container">
          <i class="bi bi-three-dots mt-2 mx-2"></i>
        </div> */}
        <div classNameName="d-flex flex-column align-items-center">
          <div className="icon mx-3">
            <i class="bi bi-three-dots "></i>
          </div>

          <img src={spoftifylogo} alt="Spotify Logo" width="150px" className="p-3" />
        </div>

        <div className="d-flex flex-column sidebar__container">
          <div className=" d-flex  align-items-baseline mt-2 mx-2">
            <FaHome className="icon mx-3" />
            <span className="">Home</span>
          </div>
          {/* <Link> */}
          <div className=" d-flex  align-items-baseline mt-2 mx-2">
            <AiOutlineSearch className="icon mx-3" />
            <span>Search</span>
          </div>
          {/* </Link> */}

          <div className=" d-flex  align-items-baseline mt-2 mx-2">
            <BiLibrary className="icon mx-3" />
            <span>Library</span>
          </div>
          <div className=" d-flex  align-items-baseline mt-4 mx-2">
            <RiAddBoxFill className="icon mx-3" />
            <span>Create Playlist</span>
          </div>
          <div className=" d-flex  align-items-baseline mt-2  mx-2">
            <MdFavorite className="icon mx-3" />
            <span>Liked Songs</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Sidebar
