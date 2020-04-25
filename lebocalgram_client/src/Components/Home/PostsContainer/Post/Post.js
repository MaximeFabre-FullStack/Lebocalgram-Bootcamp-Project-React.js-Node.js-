import React, { Component } from "react";
import "./style.css";
import ReactPlayer from "react-player";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number_of_likes: 0,
      logo_style: false,
    };
  }
  render_video = () => {
    if (this.props.video == " ") {
      // si Url vide, React Player ne s'affiche pas
    } else {
      return <ReactPlayer url={this.props.video} controls={true} width="80%" />;
    }
  };
  render_logo = () => {
    if (this.state.logo_style) {
      // Si true, rempli le petit like button
      return (
        <button
          onClick={this.likes_up}
          onDoubleClick={this.likes_down}
          className="like_button"
        >
          <svg
            class="jaime"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              clip-rule="evenodd"
            />
          </svg>
          {this.state.number_of_likes}
          {/*nombre de like affiché avec le bouton*/}
        </button>
      );
    } else {
      // quand a default (false) like button vide (visuel)
      return (
        <button
          onClick={this.likes_up}
          onDoubleClick={this.likes_down}
          className="like_button"
        >
          <svg
            class="bi bi-heart"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z"
              clip-rule="evenodd"
            />
          </svg>
          {this.state.number_of_likes}
          {/*nombre de like affiché avec le bouton*/}
        </button>
      );
    }
  };

  likes_up = () => {
    // bouton like ++
    this.setState({ number_of_likes: this.state.number_of_likes + 1 });
    this.setState({ logo_style: true });
  };
  likes_down = () => {
    // bouton like --
    if (this.state.number_of_likes > 0) {
      this.setState({ number_of_likes: this.state.number_of_likes - 1 });
    }
  };
  render() {
    return (
      <div className="post">
        <p className="post_author">
          {this.props.author}
          {this.render_logo()}
        </p>
        <p className="post_content">{this.props.content}</p>
        <div className="video_player">{this.render_video()}</div>
      </div>
    );
  }
}

export default Post;
