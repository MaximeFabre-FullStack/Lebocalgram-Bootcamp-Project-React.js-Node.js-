import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./images/logo14.png";
import Logo2 from "./images/moustael1.jpg";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="first_div">
            <Link to="/">
              <img className="logo_navbar" src={Logo} alt="logo"></img>
            </Link>
          </div>
          <div className="second_div">
            <input type="search" name="q" className="input_navbar"></input>
            <svg
              className="loupe"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="third_div">
            <Link to="/">
              <svg
                className="home logo_links"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V7h1v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5zm11-11V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link to="/profil">
              <img src={Logo2} alt="moustael" className="moustael"></img>
            </Link>
            <Link to="/login">
              <svg
                className="off logo_links"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.578 4.437a5 5 0 104.922.044l.5-.866a6 6 0 11-5.908-.053l.486.875z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M7.5 8V1h1v7h-1z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
