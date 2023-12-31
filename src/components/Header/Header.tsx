import { Avatar, Box, WrapItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import "./Header.css"

import { useRecoilState } from "recoil"
import logginState from "../../recoil/atom"
// import React from 'react'

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(logginState)
  return (
    <div className="header-wrapper flex_cen">
      <Box
        className="logo"
        fontSize={70}>
        <span className="logo_content">Caucheez</span>
      </Box>
      <div className="nav_bar_container flex_cen">
        <ul className="nav_bar flex_cen">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/category"}>Category</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/faqs"}>FAQs</Link>
          </li>
          <li>
            <Link to={"/mentor"}>Become a mentor</Link>
          </li>
          {isLoggedIn ? (
            <WrapItem>
              <Link to={"/mentee"}>
                <Avatar
                  size="md"
                  name="Kola Tioluwani"
                  src="https://bit.ly/tioluwani-kolawole"></Avatar>
              </Link>
            </WrapItem>
          ) : (
            <li>
              <Link to={"/login"}>
                <Box
                  as="button"
                  borderRadius="md"
                  ml={"25px"}
                  bg="#146C94"
                  color="white"
                  px={4}
                  h={10}>
                  Signup/Login
                </Box>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
