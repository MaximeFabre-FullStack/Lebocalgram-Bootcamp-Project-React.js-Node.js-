import React, { Component } from "react";
import "./style.css";
import Navbar from "./Navbar/Navbar";
import PostsContainer from "./PostsContainer/PostsContainer";
import Sidebar from "./Sidebar/Sidebar";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="page">
          <div className="post_container">
            <PostsContainer />
          </div>
          <div className="sidebar_container">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
